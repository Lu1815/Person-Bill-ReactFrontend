import React, { useState } from 'react'
import Form from './Form'

import { useAddFacturaMutation, useGetFacturasQuery } from '../services/appApi'

const initialState = {monto: ''}

const Factura = () => {
  const [inputData, setInputData] = useState(initialState)
  const { data, isFetching, refetch} = useGetFacturasQuery();
  const [ addFactura ] = useAddFacturaMutation();

  if(isFetching) return 'Loading...';

  const handleChangeAdd = (e) => {
    e.persist();
    const {name, value} = e.target;
    setInputData( prevState => ({
        ...prevState,
        [name]: value
    }))
  }
  console.log(inputData)

  const addNuevaFactura = async () => {
    if(inputData.monto) {
      await addFactura(inputData);
      setInputData(initialState);
      refetch();
    } else {
      window.alert('Monto debe ser llenado')
    }
  }

  return (
    <>
      <Form 
        title='Añadir Factura' 
        input1='Monto'
        nameInput1='monto'
        inputType1='number'
        onSave={addNuevaFactura}
        handleChange={handleChangeAdd}
      />
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
                    <td className="px-4 py-3">{factura.persona}</td>
                </tr>
                )) }
            </tbody>
        </table>
    </>
  )
}

export default Factura