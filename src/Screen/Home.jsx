import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tables from '../Component/Table'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [useData, setUseData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users  ")
        .then((res)=> setUseData(res.data))
        .catch((err)=> console.log(err)
        )
    
        
    },[])
    console.log(useData);
    
  return (
    <>
          <Button onClick={()=> navigate('/create')} sx={{marginBottom:5, float:"right"}} variant="contained" color="primary">Create New User</Button>
        <Tables data={useData} />

    </>
  )
}

export default Home