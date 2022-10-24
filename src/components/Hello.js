import React from 'react'
const Hello = (props)=>{
    return(
        <div>
        <h1>Hello {props.name} para::{props.children}</h1>

        </div>
    )
    // return(

    // React.createElement('div', {id:'divtag'},React.createElement('h1',null,'saikumar'))
    // )
}
export default Hello
