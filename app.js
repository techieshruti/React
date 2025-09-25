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
    <img className="img" src="https://static.vecteezy.com/system/resources/thumbnails/013/313/458/small_2x/html-icon-3d-rendering-illustration-free-vector.jpg"/>
    <img className="img" src="https://www.shutterstock.com/image-illustration/css-es6-vector-logo-design-260nw-2438405083.jpg"/>
    <img className="img" src="https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"/>
</div>

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(para)