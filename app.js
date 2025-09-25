import React from "react"
import ReactDOM from "react-dom/client"

const parent=React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"},
        React.createElement("h1", {}, "i am heading")
    ))

const para = 
<>
<h1>Welcome to React tutorial</h1>
<p className="para">React is Front-end JavaScript library. React is developed by facebook developer. React is tool for building UI component. It is also known as ReactJs.</p>
</>
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(para)