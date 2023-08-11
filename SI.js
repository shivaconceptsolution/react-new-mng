import { useState } from "react";

function SI()
{
    var [p,setP] = useState(0);
    var [r,setR] = useState(0);
    var [t,setT] = useState(0);
    var [res,setRes] = useState(0);
    function enterP(e)
    {
       setP(e.target.value);
    }
    function enterR(e)
    {
        setR(e.target.value);
    }
    function enterT(e)
    {
        setT(e.target.value);
    }
    function calc(e)
    {
       var r1 = (parseFloat(p)*parseFloat(r)*parseFloat(t))/100;
       setRes(r1);
    }
    return(<div>
      <input type="text" placeholder="Enter P" onChange={(e)=>enterP(e)} />
      <br/><br/>
      <input type="text" placeholder="Enter P" onChange={(e)=>enterR(e)} />
      <br/><br/>
      <input type="text" placeholder="Enter P" onChange={(e)=>enterT(e)} />
      <br/><br/>
      <input type="button" value="calculate" onClick={calc} />
      <br/><br/>
      <h1>{res}</h1>
    </div>)

}

export default SI;