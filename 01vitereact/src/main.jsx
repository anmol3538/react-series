import { createRoot } from 'react-dom/client'
import React from 'react'
//import App from './App.jsx'
// function Myapp(){
//     return(
//         <div>
//             <h1>Custom App</h1>
//         </div>
//     );
// }
// const reactElement = {  will not give result because its not specified in react library.
//     type: 'a',            
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
const anotheruser = "chai aur code"
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google',
       anotheruser
);
// const anotherElement = (
//     <a href="https://google.com" target = "_blank">Visit google</a>
// );
createRoot(document.getElementById('root')).render(
    //anotherElement
    reactElement
    //<App/>
);
