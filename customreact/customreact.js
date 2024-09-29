function customrender(reactElement, maincontainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    maincontainer.appendChild(domElement)
}

const maincontainer = document.querySelector('#root');

