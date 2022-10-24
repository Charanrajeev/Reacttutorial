import React,{Component} from 'react'
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"welcome guy"
        }
    
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{
                    this.setState({
                        message:"thank u for subscribing"
                    })
                }}>Subscribe</button>
            </div>
        )
        }
    }

export default Message