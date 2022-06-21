import React from 'react'

const Table = ({ title, th1, th2, th3, th4, data, onRemove, opcion }) => {
  return (
    <>
        <p className="text-lg text-center font-bold m-5">{title}</p>
        <table className="rounded-t-lg m-5 mx-auto w-max-sm bg-gray-800 text-gray-200 table-auto md:table-fixed">
            <thead>
                <tr className="text-left border-b border-gray-300">
                <th className="px-4 py-3">{th1}</th>
                <th className="px-4 py-3">{th2}</th>
                <th className="px-4 py-3">{th3}</th>
                <th className="px-4 py-3">{th4}</th>
                <th className="px-4 py-3">Opciones</th>
                </tr>
            </thead>
            <tbody>
                { data?.map((persona) => (
                <tr className="bg-gray-700 border-b border-gray-600" key={persona.id}>
                    <td className="px-4 py-3">{persona.nombre}</td>
                    <td className="px-4 py-3">{persona.apellidoPaterno}</td>
                    <td className="px-4 py-3">{persona.apellidoMaterno}</td>
                    <td className="px-4 py-3">{persona.identificacion}</td>
                    <td className="px-4 py-3">
                    { opcion && (
                        <button className="text-red-300 font-bold hover:text-red-400" onClick={() => onRemove(persona.identificacion)}>{opcion}</button>
                    )}
                    </td>
                </tr>
                )) }
            </tbody>
        </table>
    </>
  )
}

export default Table
{/* <div className="relative mx-auto w-max mt-2">
    <input type="search" 
        className="cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-gray-300 focus:pl-16 focus:pr-4" />
    <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-blue-300 peer-focus:stroke-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
</div> */}