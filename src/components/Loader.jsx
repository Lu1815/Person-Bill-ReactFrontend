import React from 'react'
import { TailSpin } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className="h-screen w-full grid content-center">
        <div className="flex mx-auto justify-center">
            <TailSpin color="#212538" height={80} width={80} />
        </div>
    </div>
  )
}

export default Loader