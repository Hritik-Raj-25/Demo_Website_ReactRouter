import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
    return (
        <div className='text-center text-2xl bg-slate-400 w-full p-5'> User : {userid} </div>
    )
}

export default User
