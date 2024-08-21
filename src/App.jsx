import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screen/Home'
import Create from './Screen/Create'
import Edit from './Screen/Edit'


const App = () => {
  return (
   
     
<>

<Routes>
     <Route  path='/' element={<Home />}  /> 
     <Route  path='/create' element={<Create />}  /> 
     <Route  path='/edit/:id' element={<Edit />}  /> 
</Routes>
    
</>                     
  )
}

export default App