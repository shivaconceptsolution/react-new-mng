import Add from "./Add";
import Footer from "./Footer";
import Header from "./Header";
import Sub from "./Sub";
function Operation()
{
    return(<div style={{backgroundColor:'cyan',height:800}}>
        <Header/>
        <Add />
        <Sub />
        <Footer />

        
    </div>)
}

export default Operation;