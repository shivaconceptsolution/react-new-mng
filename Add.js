import { useState } from "react";

function Add()
{
    var [a,setA] = useState(0);  //property  setA(), a
    var [b,setB]=  useState(0);  //property  setB(), b 
    var [c,setC] = useState(undefined);
    function enterNum1(e)
    {
      setA(e.target.value)
    }
    function enterNum2(e)
    {
       setB(e.target.value);
    }
    function add(e)
    {
        var c1 = parseInt(a)+parseInt(b);
       // alert(c);
       setC(c1)
        e.preventDefault();
    }
    return (<div style={{backgroundColor:'Orange',height:200}}>

        <input type="text"  placeholder="Enter First Number" onChange={(e)=>enterNum1(e)} />
        <br></br>
        <input type="text"  placeholder="Enter First Number" onChange={(e)=>enterNum2(e)} />
        <br></br>
        <input type="button" value="Addition" onClick={add} />
        <br></br>
         <h1>{c}</h1>
    </div>)
}

export default Add;