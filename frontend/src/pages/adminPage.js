import AdminNav from "../components/adminNav";
import AdminCard from "../components/adminCard";
const Admin = () =>{
    return(
        <>
            <AdminNav/>
            <div style={{display:"flex" , flexDirection:"row",marginTop:"3rem"}}>
                <div className="col-2" style={{display:"flex" , flexDirection:"col",position:"fixed"}}>
                    <div class="container text-center mb-3">
                        <div class="col-12">
                                    <hr/>
                                <div class="CoName col"><h4>Companies</h4></div>
                                    <hr/>
                                    <hr/>
                                    <div class="CoName col mb-1"><a href="/Samsung" classNane="row" style={{textDecoration:"",color:"black"}}><strong>Samsung</strong></a></div>
                                    <hr/>
                                    <div class="CoName col mb-1"><a href="/Lloyd" classNane="row" style={{textDecoration:"none",color:"black"}}>Lloyd</a></div>
                                    <hr/>
                                    <div class="CoName col mb-1"><a href="/Samsung" classNane="row" style={{textDecoration:"none",color:"black"}}>Lenovo</a></div>
                                    <hr/>
                                    <div class="CoName col mb-1"><a href="/Samsung" classNane="row" style={{textDecoration:"none",color:"black"}}>Samsung</a></div>
                                    <hr/>
                        </div>
                     </div>
                </div>

                <div className="col-9 mr-5" style={{display:"grid" , gridTemplateColumns:"repeat(3, auto)",marginLeft:"20%"}}>
                    <AdminCard/><AdminCard/><AdminCard/><AdminCard/><AdminCard/><AdminCard/><AdminCard/><AdminCard/>
                </div>

            </div>

        </>
    );
}

export default Admin