import Navbar from "../components/Navbar";
import Serviceform from "../components/Serviceform";
import Servicehistory from "../components/Servicehistory";

const Services = () =>{
        return (
        <>
          <Navbar/>
          <div style={{display:"flex" , flexDirection:"row"}}>
            <Serviceform/>
            <Servicehistory/>
          </div>
        </>
    )
}

export default Services;

 
