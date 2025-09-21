/*
<div class="parent">
        <div class="child">
            <h1>i am heading</h1>
        </div>
    </div>
*/
const parent=React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"},
        React.createElement("h1", {}, "i am heading")
    ))

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)