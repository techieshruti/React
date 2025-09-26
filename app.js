import React from "react"
import ReactDOM from "react-dom/client"

//React Component- we can not use react component before initialization

const Text = () => {
    return <p>I am a React Component</p>
}

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
    <Text/>
</div>

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(para)
//root.render(<Text/>)