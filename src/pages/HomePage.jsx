import React from 'react'
import { Helmet } from 'react-helmet'
import IncrementDecrement from '../components/IncrementDecrement'
import DataFetch from '../components/DataFetch'
import CardContainer from '../components/CardContainer'
import Show from '../context/Show'
import Memo from '../hooks/Memo'
import ParentComp from '../hooks/ParentComp'

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Ecommerce</title>
            </Helmet>
            <CardContainer />
            <IncrementDecrement />
            <DataFetch />
            <Show />
            <Memo />
            <ParentComp />
        </>
    )
}

export default HomePage