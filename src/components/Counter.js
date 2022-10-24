import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
     
      
    }
    IncreMent(){
    //  this.setState({
    //  count:this.state.count+1
    // },()=>{
    //   console.log(this.state.count)
    // })
    // console.log(this.state.count)
    // }
    this.setState((prevState)=>({
      count:prevState.count+1
    }))
    console.log(this.state.count)
  }
    IncreFive(){
        this.IncreMent()
        this.IncreMent()
        this.IncreMent()
        this.IncreMent()
        this.IncreMent()

    }
   

  render() {
    return (
        <div>
            <div>Count :{this.state.count}</div>
            <button onClick={()=>this.IncreFive()}>Increment</button>
        </div>
      
    )
  }
}

export default Counter