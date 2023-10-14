import React, { useState } from 'react'
import axios from 'axios'
export default function Addtaskmodal() {
    const [input,setInput]= useState({})
    console.log(input);
    const inputChange= (event)=>{
        const {name,value}= event.target
        setInput({...input,[name]:value})
    }
    const submit = ()=>{
        localStorage.setItem("Todolist",JSON.stringify(input))
        axios.post('http://localhost:2000/main/addtask',input).then((response)=>{
            console.log(response);
            window.location.reload()
        }).catch((error)=>{
            console.log(error);
        })
    }
    // const data = ()=>{
    //     localStorage.getItem("Todolist")
        
    // }
  
    // const data1 = ()=>{
    //     localStorage.clear("Todolist")
    // }
    // const data2 = ()=>{
    //     localStorage.removeItem("Todolist")
    // }
    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ADD TODO</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Tittle:</label>
                                    <input type="text" class="form-control" id="recipient-name" name='tittle' onChange={inputChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Date:</label>
                                    <input type="date" class="form-control" id="recipient-name" name='date' onChange={inputChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Time:</label>
                                    <input type="time" class="form-control" id="recipient-name" name='time' onChange={inputChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Status:</label>
                                    <select class="form-select" aria-label="Default select example" name='status' onChange={inputChange}>
                                    <option selected value=''>Select an option</option>
                                        <option value="Incomplete">Incomplete</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Inprogress">Inprogress</option>
                                    </select>
                                </div>



                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={submit}>Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
