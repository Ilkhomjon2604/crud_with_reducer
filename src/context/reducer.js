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

        case 'Update':
            return {
                ...state, active: action.payload.data.id,
                nameE : action.payload.data.name,
                jobE : action.payload.data.job,
                statusE : action.payload.data.status,
                ageE : action.payload.data.age,
        }

        case 'Save':
            let updatedData = state.info.map((value) => value.id === state.active ? {...value, name: state.nameE, age : state.ageE, status : state.statusE, job: state.jobE} : value)
            return {...state, info : updatedData, active: null}
         default: return state;}
        
    }