
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Input, Table } from 'reactstrap';
import { filterNamefc } from '../redux/chemicalsSlice';
import Chemical from './Chemical';
import Add from './Add';
export default function ChemicalApp() {
    const dispatch = useDispatch()
    const [flag, setFlag]=useState("")
    const { chemicals } = useSelector(state => state.chemicals)
    const [filterName, setFilterName] = useState("")
    const handle_filter =(filter)=>{
        dispatch(filterNamefc(filter))
    }
    return (
        <Container>
            <Add/>
            <Table
            >
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Formula
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {chemicals.map((item, index) => (
                        <Chemical 
                        item = {item}
                        key={index}
                        />
                    ))}
                </tbody>
                <br/>
                <Input value={filterName} onChange={(e)=>setFilterName(e.target.value) } placeholder='Filter Name' onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                        setFlag(filterName)
                    }
                }}/>
                <Button>Clear filter</Button>
            </Table>
        </Container>
    )
}
