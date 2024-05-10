import React from 'react'
import { Link } from 'react-router-dom'

const TestNav = () => {
    return (
        <>
            <Link to="/">Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/demo">About</Link>
        </>
    )
}

export default TestNav