import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [titulo, setTitulo] = useState(""); 
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/api/add/product', {
            titulo,
            precio,
            descripcion
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange para actualizar firstName y lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Titulo</label><br/>
                <input type="text" onChange = {(e)=>setTitulo(e.target.value)} value={titulo}/>
            </p>
            <p>
                <label>Precio</label><br/>
                <input type="text" onChange = {(e)=>setPrecio(e.target.value)} value={precio}/>
            </p>
            <p>
                <label>Descripcion</label><br/>
                <input type="text" onChange = {(e)=>setDescripcion(e.target.value)} value={descripcion}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
