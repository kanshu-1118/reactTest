import { Test1 } from '../components/Test1/Test1';
import {R_test} from '../components/r_test/r_test';
import Head from "../components/head/header"
import { useEffect } from 'react';

const App = (props) => {
    // console.log(1);
    useEffect(() => {
        console.log(2);
        window.addEventListener("load", (e) => {
            console.log(3);
        });
        console.log(4);
    },[]);
    console.log(5);
    return (
        <div>
            < Head />
            < Test1 key={1} title={"タイトルはTest1のprops.Titleと繋がってる"} />
            < Test1 key={2} title={"タイトル2"} />
            < R_test />
        </div>
    );
};

export default App;
