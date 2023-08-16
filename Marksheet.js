import { useState } from "react";

function Marksheet()
{
    var[a,setA] = useState(undefined)
    var[b,setB] = useState(undefined)
    var[c,setC] = useState(undefined)
    var[d,setD] = useState(undefined)
    var[e1,setE1] = useState(undefined)
    var[res,setRes]=useState(undefined)
   
    function setNumber(e)
    {
        if(e.target.id=="m1")
        {
       setA(e.target.value) 
         } 
         else if(e.target.id=="m2")
         {
        setB(e.target.value) 
          } 
          else if(e.target.id=="m3")
          {
         setC(e.target.value) 
           } 
           else if(e.target.id=="m4")
           {
          setD(e.target.value) 
            } 
            else 
            {
           setE1(e.target.value) 
             } 
    }

    function result(e)
    {
         var marks=[]
         marks.push(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e1))
         var totalmarks=0;
         var count=0;
         var result1='';
         var per=0
         for(var i=0;i<marks.length;i++)
         {
            if(parseInt(marks[i])<33)
            {
                count++;
            }
            if(count==0)
            {
               result1 = 'Pass';
               totalmarks+=parseInt(marks[i])
               per= totalmarks/5
               if(per>=33 && per<45)
               {
                result1 += " with third division"
               }
               else if(per<60)
               {
                result1 += " with second division"
               }
               else
               {
                result1 += " with first division"
               }

            }
            else if(count==1)
            {
                result1 = 'Suppl';
            }
            else
            {
                result1 = 'Fail';
            }
            
         }
         setRes(result1)
        e.preventDefault()
    }

    return(<div>

        <input type="text" id="m1" onChange={(e)=>setNumber(e)}  placeholder="Enter First Subject Marks" />
        <br />
        <input type="text" id="m2" onChange={(e)=>setNumber(e)}  placeholder="Enter Second Subject Marks" />
        <br />
        <input type="text" id="m3" onChange={(e)=>setNumber(e)}  placeholder="Enter Third Subject Marks" />
        <br />
        <input type="text" id="m4" onChange={(e)=>setNumber(e)}  placeholder="Enter Fourth Subject Marks" />
        <br />
        <input type="text" id="m5" onChange={(e)=>setNumber(e)}  placeholder="Enter Fifth Subject Marks" />
        <br />
        <input type="button"  value="Calculate" onClick={result} />
        <br />
        {res}
    </div>)
}
export default Marksheet;