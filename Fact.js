import { useState } from "react";

function Fact()
{
    var[a,setA] = useState(undefined)
    var[res,setRes]=useState(undefined)
    function setNumber(e)
    {
       setA(e.target.value)  //to set the textfield value under property
    }

    function fact(e)
    {
         var num = a;
         var data = '';
         var f=1;
         for(var i=num;i>1;i--)
         {
            f=f*i;
            data = data + i + "*";
         }
         setRes(data + "1="+f)
        e.preventDefault()
    }

    return(<div>

        <input type="text" onChange={(e)=>setNumber(e)}  placeholder="Enter Number to calculate factorial" />
        <br />
        <input type="button" value="Check Prime" onClick={fact} />
        <br />
        {res}
    </div>)
}
export default Fact;