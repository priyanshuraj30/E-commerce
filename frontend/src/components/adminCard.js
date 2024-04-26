import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/js/dist/button'
import micro from '../Images/micro.jpg'; 

const AdminCard=()=>{
    return (
        <>
            <div className=" card m-3" style={{width: "18rem"}}>
                            <img src={micro} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Microwave</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                                <label class="form-check-label" for="flexSwitchCheckChecked">In Stock</label>
                                </div>
                            </div>
            </div>
          
        </>
    );
}

export default AdminCard