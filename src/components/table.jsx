import React, { useReducer } from "react";
import { users } from "../mock";
import './table.css'
import { reducer } from "../context/reducer";



function Table()  {

    const [data, dispatch] = useReducer(reducer, {
        info: users,
        search: 'id',
        userName: '',
        userJob : '',
        userStatus: '',
        userAge: '',
        active : null,
        nameE : '',
        jobE: '',
        statusE: '',
        ageE: '',
    });
        

        return (
            <>
                <div className="search">
                    <select onChange={(e)=> dispatch({type:'Select', payload :{selected: e.target.value}})} >

                        <option value="id">Id</option>
                        <option value="name">Name</option>
                        <option value="job">Job</option>
                        <option value="age">Age</option>

                    </select>
                    <input onChange={(e)=> dispatch({type:'Search', payload:e.target.value})}  type="text" placeholder="Type in to search for..."/>
                </div>


                <table>
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                            <th>Age</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        { data.info.length ?
                        data.info.map(({ id, name, job, status, age }) => {

                            return <tr key={id}>

                                <td>{id}</td>
                                <td> 
                                     {name}
                                </td>

                                <td> 
                                      {job } 
                                </td>

                                 <td> 
                                   {status}  
                                </td>

                                 <td> 
                                     {age}  
                                </td>

                                <td className="action-td">

                                <button >
                                       edit
                                </button>

                                <button onClick={()=>dispatch({type: 'Del', payload: {ids: id}})} >Delete</button>

                                </td>
                                
                            </tr>
                        }): <tr ><th colSpan={6}  className="no-data">No Data Found</th></tr>}
                    </tbody>
                </table>

                        {/* Adding user inputs  */}
                <div className="input-wrapper">
                    <input name="userName" onChange={(e)=>dispatch({type:'Create', payload: {name: e.target.name, value: e.target.value}})} value={data.userName} type="text" placeholder=" Type in your Name" />
                    <input name="userJob" onChange={(e)=>dispatch({type:'Create', payload: {name: e.target.name, value: e.target.value}})} value={data.userJob} type="text" placeholder=" Type in your Job" />
                    <input name="userStatus" onChange={(e)=>dispatch({type:'Create', payload: {name: e.target.name, value: e.target.value}})} value={data.userStatus} type="text" placeholder=" Type in your Status" />
                    <input name="userAge" onChange={(e)=>dispatch({type:'Create', payload: {name: e.target.name, value: e.target.value}})} value={data.userAge} type="number" placeholder=" Type in your Age" />
                    <button onClick={()=> dispatch({type: 'Add'})} >Add Your User</button>


                </div>
            </>
            
        )
    
}

export default Table    