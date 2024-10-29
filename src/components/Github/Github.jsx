import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Hritik-Raj-25').then(res => res.json()).then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    return (
        <div
            className='text-center  bg-orange-700 text-white p-4 text-3xl'>Github Followers : {data.followers}
            <img className='pb-9 pl-9' src={data.avatar_url} alt="Github Profile Picture " width={350} />
            </div>
    )
}

export default Github

export const gitInfoLoader = async() =>{
    const response =  await fetch('https://api.github.com/users/Hritik-Raj-25')
    return response;
}
