import React, { useContext } from 'react'
import { AppContext } from '../App'

const DashBoard = () => {
    const {user} = useContext(AppContext)
    return (
        <div>
            Welcome to the dashboard {user.firstname} {user.lastname}!
        </div>
    )
}

export default DashBoard