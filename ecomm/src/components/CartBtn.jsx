import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CartBtn = () => {
    const state = useSelector((state)=> state.addItems)
    return (
        <>
            <Link to="/purchases" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </Link>
        </>
    )
}

export default CartBtn
