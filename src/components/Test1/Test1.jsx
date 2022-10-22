// import React from "react";

const Test1 = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <ul className="shiritori">
        {items.map((item,index) => <li key={index} > {item} </li> )}
        
        {/* 下のやつも同じ */}
        {/* {items.map((item,index) => {
          return(
            <li key={index}>{item}</li>
          );
        })} */}
      </ul>
    </div>
  )
};

const items = ["コアラ","ラッパ",`パリ`,`りんご`];
<Test1/>

export {Test1};
