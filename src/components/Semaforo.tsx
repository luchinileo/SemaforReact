import React, { useEffect } from 'react'
import { useState } from 'react';
import{ MdOutlineEmojiPeople}from 'react-icons/md'
import{ BsPlay}from 'react-icons/bs'


export const Semaforo = () => {
            //variable contiene el valor actual
            //funcion que permite cambiar el valor
            //useState estado inicial en el que uno decide si es un boolean // true o falce
            //variable   funcion           estado
    const [activoRojo,setColorActiRojo]= useState <Boolean> (true) //bandera /flag
    const [activoAmarillo,setColorActiAmarillo]= useState<Boolean>(false)
    const [activoVerde,setColorActiVerde]= useState<Boolean>(false)
    const [activoPeaton,setColorActiPeaton]= useState<Boolean>(false)



    const [contador,setContador]= useState(60)
    const iniciar = () => {
        if(contador >0) {
            setContador(contador - 1)
        if(contador <=30) {
            setColorActiAmarillo(true)
            setColorActiRojo(false)
        }
        if(contador <= 15) {
            setColorActiAmarillo(false)
            setColorActiVerde(true)
        }

        
    }else{
    setColorActiPeaton(true)
    setColorActiVerde(false)  

    }
 }

        

    useEffect(() => {
        //useffect se ejecuta por primera vez penas cargas la pagina por mas que no tenga dependencia
        //cada vez que el contador cambie ejecuta el codigo interno aca
        if(contador !==60) {
            setTimeout(() => {
                //ejecutamos esto
                iniciar()
            }, 250)
        }
        // =>dependencias => significa que si el valor que esta entre llaves cambia ejecuta de nuevo el useEffect
    }, [contador])



    return (
        <div className="contenedor_principal">
            {/* semaforo color rojo  y cuenta regresiva*/}
            <div className='contenedor_caja  primer_caja'>
                <div className='contenedor_caja_interior primer_caja_int'>
                    <div
                        className='caja_circulo'           /*si esta activo pone 1 sino 0.1  */
                        style={{backgroundColor: 'red' , opacity: activoRojo ? 1 : 0.1}}
                    ></div>
                </div>
                {/* contador cuenta regresiva */}
                <div className='caja_contador'>{contador}</div>
            </div>
            {/* semaforo color amarillo */}
            <div className='contenedor_caja segunda_caja'>
                <div className='contenedor_caja_interior segunda_caja_int'>
                    <div
                        className='caja_circulo'            /*si esta activo pone 1 sino 0.1  */
                        style={{
                            backgroundColor: 'yellow',
                        opacity:activoAmarillo ? 1 :  0.1,
                    }}
                    ></div>
                </div>
                {/* icono persona */}
                <div className='caja_icono'>
                    <MdOutlineEmojiPeople
                        fontSize={100}
                        color={'green'}
                        style={{opacity: activoPeaton ? 1 : 0.1}}/>
                </div>
            </div>
            {/* semaforo color verde */}
            <div className='contenedor_caja'>
                <div className='contenedor_caja_interior'>
                    <div
                        className='caja_circulo'       /*si esta activo pone 1 sino 0.1  */
                        style={{backgroundColor: '#2cd314' , opacity: activoVerde ? 1 :0.1}}
                    ></div>  
                </div>
            </div>
            {/* boton que inicia el juego */}
            <button className='btn-play' onClick={iniciar}>
                <BsPlay
                    fontSize=
                    {20}
                    style={{color: contador !== 60 ? 'black' : 'white'}}
                    />{''}
                Play
            </button>
        </div>
    )
}

