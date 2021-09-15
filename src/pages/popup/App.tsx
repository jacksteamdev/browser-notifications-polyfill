import React from 'react'

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Popup Page</h1>
      <button
        onClick={() => {
          // Permissions request must be made from a user gesture.
          browser.permissions.request({ permissions: ['notifications'] })
        }}
      >
        Enable notifications
      </button>
    </div>
  )
}

export default App
