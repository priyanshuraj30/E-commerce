import React, { useReducer,useContext,useEffect } from "react";
const CartContext = React.createContext();
const ProductContext = React.createContext();

const intialstate = {
    isLoading:true,
    products : [] 
}

const reducer = (state,action) => {
    switch(action.type) {
        case "set_loading" :
            return {
                ...state,
                isLoading:true
            }
        case "getting_products" :
            return {
                ...state,
                isLoading:false,
                products : action.payload.products
            }
        default:
            return state;
    }
}

const CartProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,intialstate)
    const fetchProducts= async () =>{
        dispatch({type:"set_loading"})
        try {
          const response = await fetch ('/cart/',
          {
            method:'GET',
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            },
            body:{
              "user_id": 1
            }
          })
          const json = await response.json()
          dispatch({type:"getting_products",
          payload:{
            products:json
          }
          })
        }
        catch (error){
          console.log(error)
        }
      }

    useEffect(() => {  
        fetchProducts()
      }, [])

    return <CartContext.Provider value={{...state}} >{children}</CartContext.Provider>
};

const ProductProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,intialstate)
    const fetchProducts= async () =>{
        dispatch({type:"set_loading"})
        try {
          const response = await fetch ('/products/',
          {
            method:'GET',
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            }
          })
          const json = await response.json()
          dispatch({type:"getting_products",
          payload:{
            products:json
          }
          })
        }
        catch (error){
          console.log(error)
        }
      }

    useEffect(() => {  
        fetchProducts()
      }, [])

    return <ProductContext.Provider value={{...state}} >{children}</ProductContext.Provider>
};

const useGlobalContext = () => {
    return useContext(CartContext);
}
const useProductContext = () => {
    return useContext(ProductContext);
}

export {CartContext,CartProvider,useGlobalContext,ProductContext,ProductProvider,useProductContext};