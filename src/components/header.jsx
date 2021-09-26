import logoperrito from 'media/logoperrito.png';
import React from 'react'
const Header = ()=>{
    return(
        <header>
            <ul className="navbar">
                <li>
                    <img src={logoperrito} alt="imagen" className="logo"/>
                </li>
                <li>
                    <button className="Button mainButton">Nuevo post</button>
                </li>
                <li>
                    <button className="Button secundaryButton">Login</button>
                </li>
                <li>
                    <div className="buscar">
                        input placeholder="Buscar una raza" type="text"/>
                        <i className="fas fa-search-plus"></i>
                    </div>
                </li>
                <li>
                    <button className="Button mainButton">Registro</button>
                </li>
            </ul>
      </header>
    )
}

export default Header
/* const variablenum = 3;
const variabletext = "Esto es un texto";
const variableArray = [1,2,5,63,4,6];
const variableObjeto = {
    llave1: "valor1",
    llave2: "valor2",
    llave3: "valor3",
};
const listaObjetos = [
    {
    llave1: "valor1",
    llave2: "valor2",
    llave3: "valor3",      
    },
    {
        llave1: "valor1",
        llave2: "valor2",
        llave3: "valor3",      
        },
];

const nombreFuncion = () =>{
    return "retorno de la funcion";
} */
