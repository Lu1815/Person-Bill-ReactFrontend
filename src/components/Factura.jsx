import React, { useEffect, useState } from 'react'
import Form from './Form'

import { useAddFacturaMutation, useGetFacturasQuery, useGetPersonasQuery } from '../services/appApi'
import Loader from './Loader'

const initialState = {monto: '', persona: {}}

const Factura = () => {
  const [inputData, setInputData] = useState(initialState)
  const { data, isFetching, refetch} = useGetFacturasQuery();
  const { data: persona } = useGetPersonasQuery();
  const [ addFactura ] = useAddFacturaMutation();

  if(isFetching) return <Loader />;

  const handleChangeAdd = (e) => {
    e.persist();
    const {name, value} = e.target;
    setInputData( prevState => ({
        ...prevState,
        [name]: value
    }))
  }
  console.log(inputData)
  console.log(persona)

  const addNuevaFactura = async () => {
    if(inputData.monto && inputData.persona) {
      await addFactura({monto: inputData.monto, persona: JSON.parse(inputData.persona)});
      setInputData(initialState);
      refetch();
    } else {
      window.alert('EL campo monto y persona deben ser llenados')
    }
  }

  return (
    <>
      { persona && (
        <Form 
          title='Añadir Factura' 
          input1='Monto' comboBox='Persona'
          nameInput1='monto' nameInput2='persona' comboBoxName='persona'
          inputType1='number'
          onSave={addNuevaFactura}
          handleChange={handleChangeAdd}
          comboData={persona}
          />
          )}
      { data ? (
        (data.length > 0) ? (
          <>
            <hr className='border-gray-300'/>
            <p className="text-lg text-center font-bold m-5">Facturas</p>
              <table className="rounded-t-lg m-5 mx-auto w-max-sm bg-gray-800 text-gray-200 table-auto md:table-fixed">
                  <thead>
                      <tr className="text-left border-b border-gray-300">
                      <th className="px-4 py-3">ID</th>
                      <th className="px-4 py-3">Fecha</th>
                      <th className="px-4 py-3">Monto</th>
                      <th className="px-4 py-3">Usuario</th>
                      </tr>
                  </thead>
                  <tbody>
                      { data?.map((factura) => (
                      <tr className="bg-gray-700 border-b border-gray-600" key={factura.id}>
                          <td className="px-4 py-3">{factura.id}</td>
                          <td className="px-4 py-3">{factura.fecha.slice(0, 9)}</td>
                          <td className="px-4 py-3">{factura.monto}</td>
                          <td className="px-4 py-3">{factura.persona?.nombre}</td>
                      </tr>
                      )) }
                  </tbody>
              </table>
          </>
        ) :  <p className="text-lg text-center font-bold m-5">No hay facturas registradas.</p>
      ) : <p className="text-lg text-center font-bold m-5">No hay conexión al backend.</p> }
    </>
  )
}

export default Factura