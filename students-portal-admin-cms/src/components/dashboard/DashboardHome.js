import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function DashboardHome () {
  const history = useHistory()
  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    if (!loginStatus) history.push("/auth")
  }, [history])

  return (
    <div>
      <h1>Welcome to admin dashboard</h1>
    </div>
  )
}

export default DashboardHome