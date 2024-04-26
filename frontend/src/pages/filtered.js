// components
import Filters from '../components/filters';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

//Bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

//Context
import {useProductContext} from '../context/appContext'

const Filtered = () => {
  const {products,isLoading} = useProductContext()
 
  if(isLoading) {
    return (
      <>
          <Navbar/>
          <div className="row">
                  <div className="col-2 " style={{borderRight:"ridge",padding:"0.5%",top:"50"}}>
                      <Filters/>
                  </div>
                  <div className='col-9 m-2'>
                    <h1>Loading...</h1>
                  </div>
              </div>
      </>
    )
  }

  return (
    <>
        <Navbar/>
        <div className="row">
                <div className="col-2 " style={{borderRight:"ridge",padding:"0.5%",top:"50"}}>
                    <Filters/>
                </div>
                <div className='col-9 m-2'>
                  {products && products.map((product)=>(
                    <ProductCard props={{title:product.title,price:product.price,details:product.details,quantity:product.quantity,id:product._id}}/>
                  ))}
                </div>
            </div>
    </>
  )
}

export default Filtered