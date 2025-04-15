import React, { useContext } from 'react'
import { NameContext, surnameContext } from './../App';
const Child3 = () => {
    const name = useContext(NameContext)
    const surname = useContext(surnameContext)
    return (
        <div>
            <h1>child3</h1>
            <h1>{name}</h1>
            <h1>{surname}</h1>
        </div>
    )
}

export default Child3