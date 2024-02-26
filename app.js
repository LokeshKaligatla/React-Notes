import React from "react";
import ReactDOM from "react-dom/client";


     // element inside elememt
     const ele = <span>Elememt inside element</span>;

// react element
//Syntax
const title = (
    <h1 className="head" tabIndex="5">
        {ele};
        <br />
        <br></br>
        React elememt
    </h1>
        );
   


        //two print two components 2
const Title = ()=> (
<h1 className="head" tabIndex="5">
    react component 2
</h1>
    );

    // js code to write inside component using {}
    // js code to write inside component using {}
    const number = 100000;

    //React functional component 1
    //syntax
    const Headingcomponent = () => (
        <div id="container">
            <Title />;
            <Title></Title>;
            {Title()};
            {title};
            {100+200};
            <h1>{number}</h1>;
        <h1>React component 1</h1>;
        </div>
    );
    /*syntax2
    const Headingcomponent2 = () => (
    <h1 classname="heading">React component</h1>
    );
    */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent />);

