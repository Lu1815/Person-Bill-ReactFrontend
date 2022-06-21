import React, { useState } from 'react'

import { useAddPersonaMutation, useGetPersonasQuery, useRemovePersonaMutation } from '../services/appApi'
import Form from './Form';
import Table from './Table';

const initialState = {nombre: '', apellidoPaterno: '', apellidoMaterno: '', identificacion: ''}

const Persona = () => {
  const [inputData, setInputData] = useState(initialState)
  const { data, isFetching, refetch } = useGetPersonasQuery();
  const [ addPersona ] = useAddPersonaMutation();
  const [ removePersona ] = useRemovePersonaMutation();

  if(isFetching) return '...Loading';

  const handleChangeAdd = (e) => {
    e.persist();
    const {name, value} = e.target;
    setInputData( prevState => ({
        ...prevState,
        [name]: value
    }))
  }
  console.log(inputData);

  const addNewPersona = async () => {
    if(inputData.nombre && inputData.apellidoPaterno && inputData.identificacion){
      let idntfcacion = data.find(item => item.identificacion === inputData.identificacion)
      if(!idntfcacion){
        await addPersona(inputData);
        setInputData(initialState);
        refetch(); 
      } else {
        window.alert("Ya existe la identificación que trato de registrar, no pueden existir identificaciones duplicadas.")
      }
    } else {
      window.alert("Se debe completar el campo nombre, apellido paterno e identificación.")
    }
  }

  const deletePersona = async (identificacion) => {
    await removePersona(identificacion);
    refetch();
  }

  return (
    <>
      <Form 
        title='Añadir usuario' 
        input1='Nombre' input2='Apellido Paterno' input3='Apellido Materno' input4='Identificación' 
        handleChange={handleChangeAdd} 
        onSave={addNewPersona}
        nameInput1='nombre' nameInput2='apellidoPaterno' nameInput3='apellidoMaterno' nameInput4='identificacion'
      />
      <hr className='border-gray-300'/>
      { (data.length > 0) ? 
        <Table 
          title='Personas / Usuarios' 
          th1='Nombre' th2='Apellido Paterno' th3='Apellido Materno' th4='Identificación' 
          data={data} 
          onRemove={deletePersona} 
          opcion='Eliminar'/>
        : <p className="text-lg text-center font-bold m-5">Todavía no hay usuarios registrados.</p>
      }
    </>
  )
}

export default Persona