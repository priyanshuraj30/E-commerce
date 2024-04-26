const Serviceorder = ({props}) =>{
    return (
        <div className="col-12 serviceHistory" style={{minWidth:"250%"}}>
            <h4>{props.product}</h4>
            <p><strong>Company: </strong>{props.company}</p>
            <p><strong>Description: </strong>{props.description}</p>
            {/* <p>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix:true})}</p> */}
            <p><strong>Date: </strong>9/3/23</p>
        </div>
    )
}
export default Serviceorder