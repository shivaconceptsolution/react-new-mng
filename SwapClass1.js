import React from "react"
export default class SwapClass1 extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {num1:undefined,num2:undefined,visibility:false}
    }
   
   
    swap=(e)=>{
              var a = this.state.num1  
              var b = this.state.num2
              var temp;
              temp=a;
              a=b;
              b=temp;
              this.setState({num1:a})
              this.setState({num2:b})
              this.setState({visibility:true})
      }
    render()
    {
        return(<div>
             <input type="text" id="txtnum1" placeholder="Enter First Number" onChange={(e)=>{
                this.setState({num1:e.target.value})
             }} />
             <br/>
             <input type="text" id="txtnum2" placeholder="Enter Second Number" onChange={(e)=>{
                this.setState({num2:e.target.value})
             }} />
             <br />
             <input type="button" value="SWAP" onClick={this.swap} />
             <br />
             {this.state.visibility?(
            <p>{this.state.num1},  {this.state.num2}</p>):<p></p>}
            
        </div>)
    }
}