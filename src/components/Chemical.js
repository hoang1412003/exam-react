import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'reactstrap'
import { deleteChemical, updateChemical } from '../redux/chemicalsSlice'
import'./chemical.css'
export default function Chemical(props) {
    let { item } = props
    const [isEdit, setIsEdit] = useState(false);
    const [editName, setEditName] = useState("")
    const [editFormula, setEditFormula] = useState("")
    
    const dispatch = useDispatch()
    const handle_delete = (id) => {
        dispatch(deleteChemical(id))
    }
    const handle_update = (chemical) => {
        console.log(chemical)
        dispatch(updateChemical(chemical))
        setEditFormula('')
        setEditName('')
    }

    return (
        <tr>
            <td>
                {item.id}
            </td>

            <td>
                {isEdit ? <Input value={editName} onChange={(e) => setEditName(e.target.value)} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handle_update({ id: item.id, name: editName, formula: item.formula })
                        setIsEdit(false)
                    }
                }} /> : <p onDoubleClick={() => {
                    console.log(isEdit)
                    setIsEdit(true)
                }}>{item.name}</p>}
            </td>
            <td>
                {isEdit ? <Input value={editFormula} onChange={(e) => setEditFormula(e.target.value)} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handle_update({ id: item.id, name: item.name, formula: editFormula })
                        setIsEdit(false)
                    }
                }} /> : <p onDoubleClick={() => {
                    console.log(isEdit)
                    setIsEdit(true)
                }}>{item.formula}</p>}
                
            </td>
            <td>
                <Button className='btn-ctn' onClick={() => handle_delete(item.id)}>Delete</Button>
            </td>
        </tr>
    )
}
