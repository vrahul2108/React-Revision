import React from 'react'
import { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {
   const data = useLoaderData()
  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/vrahul2108')
  //   .then((response)=> response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setData(data)
      
  //   })
  // },[])
  return (
    <>
      <div className='text-3xl text-center bg-gray-600 m-4 p-4'>Github Followers : {data.followers}
      <img src={data.avatar_url} alt='Git-Profile_Pic' width={300}/>
      </div>
    </>
  )
}

export default Github

export const gitInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/vrahul2108')
  return response.json()
}