import React from "react"
import ReactDOM from "react-dom/client"

const para = 
<>
<h1>Welcome to React tutorial</h1>
<p className="para">React is Front-end JavaScript library. React is developed by facebook developer. React is tool for building UI component. It is also known as ReactJs.</p>

<h3>Important topics to know before jump into React :</h3>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>  

</>
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(para)