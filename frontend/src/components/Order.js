import micro from '../Images/micro.jpg' 
import {RiDeleteBin5Line} from "react-icons/ri";
import { Link } from 'react-router-dom';

const Order = ({props}) =>{

    const handleSubmit = ()=>{
        const id = props._id
        console.log(props.id)
        fetch (`/cart/${id}`,
        {
            method:'POST',
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            },
            body:{
                "user_id":1
            }
        })
        document.location.reload(true);
    }

    const handleSubmit2 = ()=>{
        const id = props._id
        console.log(props.id)
        fetch (`/cart/${id}`,
        {
            method:'DELETE',
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            }
        })
        document.location.reload(true);

    }

    return (
        <>
                <div class="row" style={{height:"60%"}}>
                    <div class="col-4" style={{height:"60%"}}>
                    <input type="checkbox" style={{marginRight:"10%", checked:"checked"}}/>
                    <img src={micro} alt="" style={{height:"60%",width:"60%",marginBottom:"0"}}/>
                    </div>
                    <div class="col-8">
                        <div style={{display:"flex"}}>
                            <h3>{props.title}</h3>
                            <div style={{justifyContent:"flex-end" , display:"flex", width:"70%"}}>
                            <h3 style={{marginLeft:"0%"}}>${props.price}</h3>
                            </div>
                        </div>
                        <h6 style={{color:"green"}}>In stock</h6>
                        <input type="text" placeholder='Quantity' style={{outline:"none"}}/>
                        <button onClick={handleSubmit2} style={{backgroundColor:"#fff" , border:"none"}}><RiDeleteBin5Line/></button>
                        <button onClick={handleSubmit} style={{backgroundColor:"#fff" , border:"none"}}>+</button>
                        <button><Link to='/buynow'>BUY Now</Link> </button>

                        <h3>{props.quantity}</h3>
                    </div>
                </div>  
        </>
    )
}

export default Order