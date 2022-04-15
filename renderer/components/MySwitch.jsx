import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
const MySwitch = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-neutral-700'
      } relative inline-flex items-center h-8 rounded-full w-14`}>
      <span className="sr-only">Toggle</span>
      <span
        className={`${
          enabled ? 'translate-x-7' : 'translate-x-1'
        } inline-block w-6 h-6 transform bg-white rounded-full transition-transform`}
      />
    </Switch>
  )
}

export default MySwitch
