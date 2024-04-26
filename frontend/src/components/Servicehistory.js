import Serviceorder from "./Serviceorder"

const Servicehistory = () =>{
    return (
        <div style={{marginRight:"7%" ,display:"flex", maxWidth:"30%" }}>
            <div className="col-12">

              <Serviceorder props = {{product:"Refrigeraator", company:"Samsung", description:"Hello"}}/>
              <Serviceorder props = {{product:"Refrigeraator", company:"Samsung", description:"Hello"}}/>
              <Serviceorder props = {{product:"Refrigeraator", company:"Samsung", description:"Hello"}}/>
              <Serviceorder props = {{product:"Refrigeraator", company:"Samsung", description:"Hello"}}/>
              <Serviceorder props = {{product:"Refrigeraator", company:"Samsung", description:"Hello"}}/>
              <Serviceorder props = {{product:"Refrigeraator", company:"Samsung", description:"Hello"}}/>
              
            </div>
          </div>
    )
}

export default Servicehistory