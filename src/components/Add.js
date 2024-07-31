import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'
import { addChemical } from '../redux/chemicalsSlice'
import { useDispatch } from 'react-redux'
import "./add.css"
export default function Add() {
    const dispatch =useDispatch()
    const [name, setName] = useState("")
    const [formula, setFormula] = useState("")
    const handle_add = (chemical) =>{
        dispatch(addChemical(chemical))
        setName("")
        setFormula("")
    }
  return (
    <div>
        <Input className='ip-ct'  value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} />
        <Input className='ip-ct' value={formula} placeholder='Name' onChange={(e)=>setFormula(e.target.value)} />
        <Button className='btn-ct' onClick={()=>handle_add({name: name, formula: formula})}>Add</Button>
    </div>
  )
}
