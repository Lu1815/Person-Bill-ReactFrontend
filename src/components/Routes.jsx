import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import Factura from './Factura'
import Persona from './Persona'

const Routes = () => {
  return (
    <div className='p-4'>
        <Switch>
            <Route exact path='/' element={<Persona/>}/>
            <Route exact path='/factura' element={<Factura/>}/>
        </Switch>
    </div>
  )
}

export default Routes