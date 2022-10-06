import { useState } from "react";
import './r_test.css';


const R_test = () => {
    const [count, setCount] = useState(0)
    // open という名前の state 変数を宣言、初期値 true をセット
    const [open, setOpen] = useState(true)
    // toggleの関数を宣言
    const toggle = () => setOpen(!open)
    return (
        <>
            <button onClick={toggle} className="open-btn">{open ? 'open' : 'close'}</button>
            <div className={open ? 'isopen' : 'isclose '}>
            <button className="btnCount" onClick={() => setCount(count => count + 1)}>{count}</button>
            <p>{count}</p>
            </div>
        </>
    );
};

export {R_test};