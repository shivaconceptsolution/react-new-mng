import { useState } from "react";

function MarksheetObjectArr()
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
       //  var marks=[]
         //var subject= ["PHY", "CHEM","MATH","ENG","HINDI"]
        // marks.push(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e1))
         var marks = {PHY:parseInt(a),CHEM:parseInt(b),MATH:parseInt(c),Eng:parseInt(d),Hindi:parseInt(e1)} 
        var totalmarks=0;
         var count=0;
         var result1='';
         var grace=0;
         var per=0;
         var dist='';
         var message='';
         for(var key in marks)
         {
            if(parseInt(marks[key])<0 || parseInt(marks[key])>100 )
            {
                message = 'Invalid Marks';
                break
            }
            if(parseInt(marks[key])<33)
            {
                grace=parseInt(marks[key]);
                count++;
            }
            if(parseInt(marks[key])>=75)
            {
                dist+=key+ " ";
            }
           }
           if(message=='')
           {
            if(count==0 ||  count==1 && grace>=28)
            {
               result1 = 'Pass';
               totalmarks+=parseInt(marks[key])
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
               if(grace>0)
               {
                result1 += "pass by grace and grace marks is " + (33-grace)
               }
               if(dist!='')
               {
                result1 += " Distinction subject is "+dist
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
        else
        {
            result1 = "Subject Marks should be 0 to 100";
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
export default MarksheetObjectArr;