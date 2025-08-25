import React, { useEffect, useState } from 'react'
import api from '../api/client.js'

export default function Home(){
  const [data, setData] = useState(null)
  useEffect(()=>{
    api.get('/api/health').then(r => setData(r.data)).catch(()=>setData({status:'backend not reachable'}))
  },[])
  return (
    <div style={{padding:20}}>
      <h1>Smart Sugarcane Platform</h1>
      <p>Frontend is up. Checking backend health...</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
