import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-white text-2xl font-semibold'>Hello <br /> <span className='text-white text-3xl'>Lovenish 🤟🏻</span> </h1>

      <button className='text-white text-lg font-medium bg-red-600 px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
