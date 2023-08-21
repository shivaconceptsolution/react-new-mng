import { useState } from "react"

function ListboxExample()
{
    var [course1,setCourse1] = useState(0)
    
    var [res,setRes] = useState(undefined)
   
   var s=''
    function selectCourse(e)
    {
        for(var i=0;i<e.target.length;i++)

        {

            if(e.target.options[i].selected)

            {

                s = s + e.target.options[i].value;

            }

        }

       
         setCourse1(s);
    }
    
   function displayCourse(e)
    {
        setRes(course1);
        e.preventDefault();
    }
    return(<div>
         <select onChange={selectCourse} multiple>
        
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

export default ListboxExample;