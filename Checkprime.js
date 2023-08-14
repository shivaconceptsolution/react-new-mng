import { useState } from "react";

function Checkprime()
{
    var[a,setA] = useState(undefined)
    var[res,setRes]=useState(undefined)
    function setNumber(e)
    {
       setA(e.target.value)  //to set the textfield value under property
    }

    function chkprime(e)
    {
         var num = a;
         for(var i=2;i<num;i++)
         {
            if(num%i==0)
            {
                 setRes("not prime");
                 break;
            }
         }
         if(num==i)
         {
            setRes("prime")
         }
        e.preventDefault()
    }

    return(<div>

        <input type="text" onChange={(e)=>setNumber(e)}  placeholder="Enter Number to Check Prime" />
        <br />
        <input type="button" value="Check Prime" onClick={chkprime} />
        <br />
        {res}
    </div>)
}
export default Checkprime;