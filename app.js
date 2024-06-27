import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{},
//     React.createElement("h1",{},"hell00o world")),
//     React.createElement("div",{},
//         React.createElement("h1",{},"hello world"))])
//             const root = ReactDOM.createRoot(document.getElementById("root"));
//             root.render(heading);
    const Heading =() => {
        return <h1 id="heading">Namaste script </h1>
    };
    const Headingcomponent= () => (
      <div>
        <Heading/> {/*component compojision*/}
       <h1>Namaste React episode 3</h1>
       </div> 
    );
    const root = ReactDOM.createRoot(document.getElementById("root"));
           root.render(<Headingcomponent />);