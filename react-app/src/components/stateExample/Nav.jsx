import React, { useContext } from 'react'
import { AppContext } from '../../App'

const Nav = () => {
    const {products} =  useContext(AppContext)
    return (
        <h1>Products({products.length})</h1>
    )
}

export default Nav