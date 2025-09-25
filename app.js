import React from "react"
import ReactDOM from "react-dom/client"

const parent=React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"},
        React.createElement("h1", {}, "i am heading")
    ))

const para = <p>Welcome to React learning series and here I am learning JSX</p>

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(para)