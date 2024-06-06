import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



useEffect(async()=>{
   let response =     await fetch(`${import.meta.env.VITE_BACK_END_API}/getusers`,{
    method:"GET",
   })
   let allusers = await response.json()
   console.log("allusers",response,allusers)
},[])


  const [form, setForm] = useState({})
  console.log("klsalgklk",form)
const onChange =(e)=>{
  const {name,value} = e?.target
  setForm((pre)=> ({...pre,[name]:value}))
}
const onsubmit =async(e)=>{
   e.preventDefault()
   await fetch(`${import.meta.env.VITE_BACK_END_API}/register`,{
    method:"POST",
    headers:{"content-type":"application/json"},
    body: JSON.stringify(form)
   }) 
}
  return (
    <>

      <form action="" onSubmit={onsubmit} className=''>
        <span className='text-[24px]'>Registration</span>
        <div className='w-full flex flex-col my-4 items-end'>

    
        <div className='flex gap-2 my-2'> 
          <label>Name</label>
          <input type="text" name='name' onChange={onChange} />
        </div>
        <div className='flex gap-2 my-2'>
          <label>last name</label>
          <input type="text" name='lname' onChange={onChange} />
        </div>
        <div className='flex gap-2 my-2'> 
          <label>Age</label>
          <input type="number" name='age' onChange={onChange} />
        </div>
        <div className='flex gap-2 my-2'>
          <label>Email</label>
          <input type="text" name='email' onChange={onChange} />
        </div>
        <div className='flex gap-2 my-2'>
          <label>password</label>
          <input type="text" name='password' onChange={onChange} />
        </div>
        <div className='flex gap-2 my-2'> 
          <label>Confirm Password</label>
          <input type="text" name='confirmPassword' onChange={onChange} />
        </div>
      
        <button type="submit"> Submit</button>
        </div>
      </form>
   
    
    </>
  )
}

export default App
