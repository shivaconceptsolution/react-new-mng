import { useState } from "react"

function DropdownListExample()
{
    var [course1,setCourse1] = useState(0)
    
    var [res,setRes] = useState(undefined)
   
   
    function selectCourse(e)
    {
         setCourse1(e.target.value);
    }
    
   function displayCourse(e)
    {
        setRes(course1);
        e.preventDefault();
    }
    return(<div>
         <select onChange={selectCourse}>
            <option value="">Select Course</option>
            <option value="C">C</option>
            <option value="CPP">CPP</option>
            <option value="DS">DS</option>
            <option value="JAVA">JAVA</option>
         </select>
         <br/>
        <input type="button" onClick={displayCourse} value="Click" />
         <br/>
         {res}
    </div>)
}

export default DropdownListExample;