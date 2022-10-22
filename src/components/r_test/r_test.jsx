import { useState } from "react";
import style from './r_test.module.scss';


const R_test = () => {
    const [count, setCount] = useState(0)
    // open という名前の state 変数を宣言、初期値 true をセット
    const [open, setOpen] = useState(true)
    // toggleの関数を宣言
    const toggle = () => setOpen(!open)
    return (
        <>
            <button onClick={toggle} className={style.openBtn}>{open ? 'open' : 'close'}</button>
            <div className={open ? style.isopen : style.isclose }>
            <button className={style.btnCount} onClick={() => setCount(count => count + 1)}>{count}</button>
            <p>{count}</p>
            </div>
        </>
    );
};

export {R_test};