import { useState } from "react"

function CheckboxExample()
{
    var [course1,setCourse1] = useState(0)
    var [course2,setCourse2] = useState(0)
    var [res,setRes] = useState(undefined)
    var s1=''
    var s2=''
   
    function chkC(e)
    {
          if(e.target.checked)
          {
            s1 = e.target.value + " ";
          }
          else
          {
            s1 = '';
          }
       
        setCourse1(s1);
    }
    function chkCPP(e)
    {
        if(e.target.checked)
          {
            s2 = e.target.value + " ";
          }
          else
          {
            s2 = '';

          }
         
         setCourse2(s2);
    }
   function displayCourse(e)
    {
        setRes(course1 + course2);
        e.preventDefault();
    }
    return(<div>
        <input type="checkbox" onChange={chkC} value="C" />C
        <br />
        <input type="checkbox" onChange={chkCPP} value="CPP"  />CPP
        <br />
        <input type="button" onClick={displayCourse} value="Click" />
         <br/>
         {res}
    </div>)
}

export default CheckboxExample;