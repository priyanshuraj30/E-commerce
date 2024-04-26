import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import micro from '../Images/micro.jpg' 
const  ProductCard = ({props}) =>{

    const handleSubmit = async ()=>{
        const id = props.id
        console.log(props.id)
        await fetch (`/cart/${id}`,
        {
            method:'POST',
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            },
            body:JSON.stringify({
                "user_id":1
            })
        })
        // const json = await response.json()
    }

    // const handleSubmit2 = ()=>{
    //     const id = props.id
    //     console.log(props.id)
    //     fetch (`/cart/${id}`,
    //     {
    //         method:'DELETE',
    //         headers: {
    //             Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    //         }
    //     })
    //     // const json = await response.json()
    // }

    return(
        <>
            <div class="card mb-3" style={{backgroundColor:"rgb(202, 159, 202)"}}>
                <div class="row g-0">
                    <div class="col-md-4 card-img-div">
                    <img src={micro} alt="" className="img-fluid rounded-start card-image" style={{height:"80%",width:"100%"}}/>
                    </div>
                    <div class="col-md-8" >
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text"><strong>Memory and storage:</strong> {props.details}<br></br>Quantity: {props.quantity}<br/>Operating System: Pre-loaded Windows 11<br/>Display: 15.6 Inches screen with 1920 x 1080 Pixels resolution<br/>Weight: 1.69 Kg<br/>Warranty: 1 Year from the manufacturer from the date of purchase</p>
                        <p class="card-text"><small class="text-muted">{props.price}</small></p>
                        <button type="button" class="btn btn-primary m-2 listitem" onClick={handleSubmit} style={{backgroundColor:"rgb(226, 192, 226)",border:"none",color:"black"}}>Add To Cart</button>
                        <button type="button" class="btn btn-primary m-2 listitem"  style={{backgroundColor:"rgb(226, 192, 226)",border:"none",color:"black"}}>View Details</button>

                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default ProductCard