import React, { useState } from "react";

const ToDoList = () => {

//Esta función agrega el valor nuevo
        const [toDo,setToDo] = useState('¿Qué falta hacer?')
        const [toDoArray,setToDoArray] = useState([])
        function addDuty(e) {
            setToDo (e.target.value)
        }
//Esta función activa el enter
        function submit(e) {
            console.log('submit')
            setToDoArray ([...toDoArray,toDo])
            e.preventDefault();
        }
//Esta función borra los elementos
        function borrar (id) {
            let duties = []
            duties = toDoArray.filter((item,index) => {
                if (index !== id) {
                    return item
                }
            })
            setToDoArray(duties)
        }

	return (
        <>
            <div className='container'>
                <h1 className="text-light fw-light text-center">to do's</h1>
                <form onSubmit={submit} className="w-50 m-auto">
                        <input className="border-0 w-100" type="text" onChange={addDuty} value={toDo} aria-label=".form-control-lg example"/>
                        <ul className="list-group list-group-flush" >
                            {toDoArray.map((item, id) => 
                            <li key={id} >{item}<button onClick={() => borrar(id)} type= "button" >Borrar</button></li>
                            )}
                            <li><h6>{toDoArray.length} items left</h6></li>
                        </ul>
                </form>
            </div>
        </>
    );
};

export default ToDoList;