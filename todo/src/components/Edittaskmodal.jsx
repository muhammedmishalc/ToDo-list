import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Edittaskmodal({editvalue}) {
  
    const [input,setInput]= useState({})
    console.log(input);
    const inputChange= (event)=>{
        const {name,value}= event.target
        setInput({...input,[name]:value})
    }
    const submit = (id)=>{
        
        axios.post(`http://localhost:2000/main/edittask/${id}`,input).then((data)=>{
            console.log(data);
            setInput(data.data.details)
           window.location.reload()
        }).catch((error)=>{
            console.log(error);
        })
    }

useEffect(()=>{
setInput(editvalue)
},[editvalue])

    return (
        <div>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">EDIT TODO</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Tittle:</label>
                                    <input type="text" class="form-control" id="recipient-name" name='tittle' onChange={inputChange} value={input?.tittle}  />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Date:</label>
                                    <input type="date" class="form-control" id="recipient-name" name='date' onChange={inputChange} value={input?.date} />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Time:</label>
                                    <input type="time" class="form-control" id="recipient-name" name='time' onChange={inputChange} value={input?.time} />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Status:</label>
                                    <select class="form-select" aria-label="Default select example" name='status' onChange={inputChange} value={input?.status}>
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
                            <button type="button" class="btn btn-primary" onClick={()=> submit(input._id)}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
