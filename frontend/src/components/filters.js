import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
const  Filters = () =>{

    return(
        <>
            <div class="container text-center mb-3 box">
                <div class="col-12 filterbox">
                    <div class="CoName col"><h4>Companies</h4></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?id=Samsung`} classNane="row" style={{textDecoration:"none",color:"black"}}>Samsung</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?id=Lloyd`} classNane="row" style={{textDecoration:"none",color:"black"}}>Lloyd</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?id=Lenovo`} classNane="row" style={{textDecoration:"none",color:"black"}}>Lenovo</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?id=Heir`} classNane="row" style={{textDecoration:"none",color:"black"}}>Heir</Link></div>
                    </div>
            </div>
            <div class="container text-center mb-3 box">
                <div class="col-12 filterbox">
                    <div class="CoName col"><h4>Products</h4></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?product=LED TV`} classNane="row" style={{textDecoration:"none",color:"black"}}>LED TV</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?product=Refrigerator`} classNane="row" style={{textDecoration:"none",color:"black"}}>Refrigerator</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?product=Laptops`} classNane="row" style={{textDecoration:"none",color:"black"}}>Laptops</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?product=Mobile`} classNane="row" style={{textDecoration:"none",color:"black"}}>Mobile</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?product=AC`} classNane="row" style={{textDecoration:"none",color:"black"}}>AC</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?product=headphones`} classNane="row" style={{textDecoration:"none",color:"black"}}>Headphones</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?product=micro`} classNane="row" style={{textDecoration:"none",color:"black"}}>Microwaves</Link></div>
                    </div>
            </div>
            <div class="container text-center mb-3 box">
                <div class="col-12 filterbox">
                    <div class="CoName col"><h4>Price ranges</h4></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?price=10000`} classNane="row" style={{textDecoration:"none",color:"black"}}> less than 10000 </Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?price=30000`} classNane="row" style={{textDecoration:"none",color:"black"}}>less than 30,000</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?price=50000`} classNane="row" style={{textDecoration:"none",color:"black"}}>less than 50,000</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?price=70000`} classNane="row" style={{textDecoration:"none",color:"black"}}>less than 70,000</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?price=100000`} classNane="row" style={{textDecoration:"none",color:"black"}}>less than 1,00,000</Link></div>
                        <div class="CoName col mb-1 listitem"><Link to={`/companies/?price=100000000`} classNane="row" style={{textDecoration:"none",color:"black"}}>more than 10,00,00,000</Link></div>
                    </div>
            </div>
        </>
    )
}

export default Filters