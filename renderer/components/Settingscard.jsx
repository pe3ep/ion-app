import React, { useState } from 'react'
import MySwitch from './MySwitch'

const Settingscard = (props) => {
  return (
    <div className="transition-colors flex items-center justify-between bg-neutral-800 p-8 rounded-lg text-white shadow-lg">
      <div>
        <h1 className="heading text-2xl">{props.title}</h1>
        <p className="font-Inter text-gray-400">{props.description}</p>
      </div>
      <MySwitch />
    </div>
  )
}

export default Settingscard
