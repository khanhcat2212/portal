import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='w-screen h-34.5 flex items-center justify-center bg-grey-800'>
        <p className='text-[14px] text-grey-200'>
            Copyright © 2023
            <span className='font-bold mx-1'>Wifosell</span>
            | Powered by 
            <span className='font-bold ml-1'>Wifosoft</span>
        </p>
    </div>
  )
}

export default Footer