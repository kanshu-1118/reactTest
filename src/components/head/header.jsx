import React from 'react'
import style from "./header.module.scss"

const header = () => {
    return (
        <div className={style.header}>
            <nav>
                <ul>
                    <li><a href="/">TOP</a></li>
                    <li><a href="/Pra1">Practeice1</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default header