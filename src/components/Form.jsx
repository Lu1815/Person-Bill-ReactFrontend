import React from 'react'

const Form = ({ title, input1, input2, input3, input4, onSave, onCancel, handleChange, nameInput1, nameInput2, nameInput3, nameInput4, inputType1, inputType2, inputType3, inputType4, comboBox, comboBoxName, comboData }) => {
  return (
    <div className="container px-4 mx-auto">
        <div className="max-w-sm mx-auto">
            <div className="text-center mb-2">
                <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
            </div>
            { input1 && (
                <div className="mb-6">
                    <div className='flex flex-row'>
                        <label className="block mb-2 font-bold" htmlFor="">{input1}</label>
                        <span style={{color:"#ff0000"}}>*</span>
                    </div>
                    <input className="required:border-red-500 inline-block w-full p-2 leading-6 text-md font-extrabold placeholder-gray-400 bg-white shadow border-2 border-gray-800 rounded" type={inputType1 ? inputType1 : 'text'} name={nameInput1} placeholder={input1} onChange={handleChange}/>
                </div>
            )}
            { input2 && (
                <div className="mb-6">
                    <div className='flex flex-row'>
                        <label className="block mb-2 font-bold" htmlFor="">{input2}</label>
                        <span style={{color:"#ff0000"}}>*</span>
                    </div>
                    <input className="inline-block w-full p-2 leading-6 text-md font-extrabold placeholder-gray-400 bg-white shadow border-2 border-gray-800 rounded" type={inputType2 ? inputType2 : 'text'} name={nameInput2} placeholder={input2} onChange={handleChange}/>
                </div>
            )}
            { input3 && (
                <div className="mb-6">
                    <label className="block mb-2 font-bold" htmlFor="">{input3}</label>
                    <input className="inline-block w-full p-2 leading-6 text-md font-extrabold placeholder-gray-400 bg-white shadow border-2 border-gray-800 rounded" type={inputType3 ? inputType3 : 'text'} name={nameInput3} placeholder={input3} onChange={handleChange}/>
                </div>
            )}
            { input4 && (
                <div className="mb-6">
                    <div className='flex flex-row'>
                        <label className="block mb-2 font-bold" htmlFor="">{input4}</label>
                        <span style={{color:"#ff0000"}}>*</span>
                    </div>
                    <input className="inline-block w-full p-2 leading-6 text-md font-extrabold placeholder-gray-400 bg-white shadow border-2 border-gray-800 rounded" type={inputType4 ? inputType4 : 'text'} name={nameInput4} placeholder={input4} onChange={handleChange}/>
                </div>
            )}
            { comboBox && (
                <div class="mb-3 xl:w-96">
                    <div className='flex flex-row'>
                        <label className="block mb-2 font-bold" htmlFor="">{comboBox}</label>
                        <span style={{color:"#ff0000"}}>*</span>
                    </div>
                    <select class="form-select w-full px-3 p-2 text-md font-extrabold text-gray-400 border-gray-800 border-2  rounded transition ease-in-out focus:text-gray-900 focus:bg-white focus:border-gray-900 focus:outline-none" aria-label="Default select example"
                    name={comboBoxName}
                    onChange={handleChange}
                    >
                        <option selected>Open this select menu</option>
                        { comboData?.map((persona) => (
                            <option value={JSON.stringify(persona)}>{persona.nombre} {persona.apellidoPaterno}</option>
                        ))}
                    </select>
                </div>
            )}
            <button className="inline-block w-full mb-2 py-2 px-6 text-center text-lg leading-6 text-white font-extrabold bg-gray-800 hover:bg-gray-700 border-3 border-indigo-900 shadow rounded transition duration-200" onClick={() => onSave()}>Guardar</button>
            { onCancel && (
                <div className="flex justify-center my-4">
                    <button className="text-blue-500 font-bold hover:text-blue-600" onClick={() => onCancel()}>Cancelar</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default Form