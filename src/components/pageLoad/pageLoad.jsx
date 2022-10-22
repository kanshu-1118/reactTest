import React, { useEffect, useRef, useState } from 'react'
import style from "./pageLoad.module.scss"

const pageLoad = () => {
    const [power,setPower] = useState(false)
    const wrap = useRef(null)
    useEffect(()=> {
        console.log(wrap.current);
        window.addEventListener("load", (e) => {
            console.log(e);
        });
    },[]);
    return (
        <>
        <div className={style.wrap} ref={wrap}>
            <h1>電源{power ? "ON" : "OFF" }</h1>
            <button onClick={() => setPower(pre => !pre)} >ON/OFF</button>
            <button onClick={() => setPower(true)} >ON</button>
            <button onClick={() => setPower(false)} >OFf</button>
        </div>
        </>
    )
}

export default pageLoad