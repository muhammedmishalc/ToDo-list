import React, { useState } from 'react'
import Addtaskmodal from './Addtaskmodal'
import axios from 'axios'

export default function Header({view}) {

  
 
  return (
    <React.Fragment>
      <div class="container">
        <h1 align='center'>TODO LIST</h1>
        <button type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">Add Task</button>

        <div class="btn-group float-end" >
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            All
          </button>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">All</a></li>
            <li><a class="dropdown-item" value="Incomplete" onClick={()=>{view('Incomplete')}}>Incomplete</a></li>
            <li><a class="dropdown-item" value="Completed"onClick={()=>{view('Completed')}}>Completed</a></li>
            <li><a class="dropdown-item" value="Inprogress"onClick={()=>{view('Inprogress')}}>Inprogress</a></li>
          </ul>
        </div>
        <Addtaskmodal />
      </div>
    </React.Fragment>
  )
}
