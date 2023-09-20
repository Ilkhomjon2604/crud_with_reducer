import { users } from "../mock";
export const  reducer = (state, action) =>{
    
        switch(action.type)
        
       { 
        // ON__DELETE 
        case 'Del':
            let deleted = state.info.filter(val => val.id !== action.payload.ids);
            return {...state, info : deleted};

        // ON__SELECT
        case 'Select':
            return {...state, search: action.payload.selected}

        // ON__SEARCH 
        case  'Search':
            let searched = users.filter((value) => `${value[state.search]}`.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()));               
            return {...state, info : searched};
        // ON_CREATE 
        case 'Create':
            return{ ...state, [action.payload.name]: action.payload.value}

        // ON__ADD 
        case 'Add':
            let addUser = [
                ...state.info, {
                    id: state.info.length + 1,
                    name : state.userName,
                    status : state.userStatus, 
                    job: state.userJob,
                    age : state.userAge,
                }
            ]
            
            return  state.userName.length && state.userAge.length && state.userJob.length && state.userStatus.length?
             {...state, info : addUser, userName:'', userAge:'', userStatus:'', userJob: ''} : state


         default: return state;}
        
    }