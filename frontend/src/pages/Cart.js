// components
import Navbar from '../components/Navbar';
import Order from '../components/Order';

// Bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

//context 
import {useGlobalContext} from '../context/appContext';
import { useState,useEffect } from 'react';

const Cart =  () => {
  // console.log("Raghav Doda")
  // const {isLoading,products} = useGlobalContext();
  const [products,setProducts] = useState([]) 
  
  useEffect(() => {  
    const fetchProducts= async () =>{
      const response = await fetch ('/cart/',
      {
        method:'GET'
      })
      const json = await response.json()
      console.log("aedjf")
      console.log(json)
      console.log("aedjf")
      setProducts(json)
  }
    fetchProducts()
  }, [])
  console.log("Raghav Doda")
  console.log(products)
  

  return (
    <>
      <Navbar/>
        <>
          <div style={{marginRight:"7%",marginLeft:"7%" , marginTop:"5%"}}>
            <h3>Shoping Cart</h3>
            <a href="/">deselect all items</a>
          </div>
          <div style={{marginRight:"7%",marginLeft:"7%" , marginTop:"2%"}}>
            <hr className="solid" />  
            {products.map((product)=>(
              <>
                <Order props={product}/> 
                <hr className="solid" />
              </>
            ))}   
          </div>
        </>
    </>
  )
}

export default Cart