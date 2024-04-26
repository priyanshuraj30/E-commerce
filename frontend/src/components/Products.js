import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import refrigerator from '../Images/refrigerator.jpg' 
import micro from '../Images/micro.jpg' 
import AC from '../Images/AC.jfif'

const style = 
{
    width:"10rem"
}


const Products = () =>{
    return (
        <>
        <div className="pickProduct">
        <div class="Products container text-center">
                <div class="row">
                    <div className="Card col" style={style}>
                        <a href="/"><img src={micro} alt=""/></a>
                        <h5 className="Card-title">Micro</h5>
                    </div>
                    <div className="Card col" style={style}>
                        <a href="/"><img src={refrigerator} alt=""/></a>
                        <h5 className="Card-title">Micro</h5>
                    </div><div className="Card col" style={style}>
                        <a href="/"><img src={micro} alt=""/></a>
                        <h5 className="Card-title">Micro</h5>
                    </div><div className="Card col" style={style}>
                        <a href="/"><img src={refrigerator} alt=""/></a>
                        <h5 className="Card-title">Micro</h5>
                    </div><div className="Card col" style={style}>
                        <a href="/"><img src={AC} style ={{height:"30%" , marginBottom: "80%", marginTop : "10%"}}alt=""/></a>
                        <h5 className="Card-title">Micro</h5>
                    </div>
                </div>
            </div>
            <div class="Products container text-center">
                <div class="row">
                    <div className="Card col" style={style}>
                    <a href="/"><img src={micro} alt=""/></a>
                    <h5 className="Card-title">Micro</h5>
                    </div>
                    <div className="Card col" style={style}>
                    <a href="/"><img src={refrigerator} alt=""/></a>
                    <h5 className="Card-title">Micro</h5>
                    </div><div className="Card col" style={style}>
                    <a href="/"><img src={refrigerator} alt=""/></a>
                    <h5 className="Card-title">Micro</h5>
                    </div><div className="Card col" style={style}>
                    <a href="/"><img src={micro} alt=""/></a>
                    <h5 className="Card-title">Micro</h5>
                    </div><div className="Card col" style={style}>
                    <a href="/"><img src={refrigerator} alt=""/></a>
                    <h5 className="Card-title">Micro</h5>
                    </div>
                </div>
            </div>
        </div>
            
                
                
        </>
    );
}
export default Products;