import React from "react"
import ReactDOM from "react-dom/client"

const para = 
<div id="container">
    <h1>Welcome to React Tutorial</h1>
    <p className="para">React is javascript library. React is developed by facebook developer. React is tool for building UI component. It is also known as ReactJs.</p>
    <h3>Important Topics to learn before jumo to React</h3>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

</div>

//React Component
const link = ()=>{<a href="https://react.dev/">React Documentation</a>};


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(para)