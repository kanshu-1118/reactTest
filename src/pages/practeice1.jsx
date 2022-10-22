import React, { useEffect } from 'react'
import Head from "../components/head/header"
import PLoad from "../components/pageLoad/pageLoad"

const practeice1 = () => {
    useEffect(() => {
        console.log(1);
    },[]);
    return (
        <div>
            <Head />
            <PLoad />
        </div>
    )
}

export default practeice1