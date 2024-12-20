import React,{ useState,useEffect ,useContext} from "react";
import Spinner from "../Spinner"
import { AddContext } from "../../Context/ContextProvider";

const Features = () => {
  const {AddToCart,button,showButton,products,loading} = useContext(AddContext)

  return (  
  <div className="mt-10">
    {loading ? (<Spinner loading={loading} />) : (
      <> 
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7  2xl:grid-cols-8 mt-20"> 

          {products.map((product) => (    
            <div className="pt-28 sm:pt-16 px-5 pb-10 flex flex-col border items-center text-xs animate-slideright" key={product.key} id={product.key}>

              <div className="flex justify-center items-center mb-2">
                <img className="w-full mb-4 h-20" src={product.image} alt = {product.name}/>
              </div>
 
              <div className="sm:text-sm text-3xl line-clamp-2">{product.name}</div>

              <div className="flex items-center mt-4 -ml-14"> 
                <img className="sm:w-14 w-28" src={`src/assets/images/ratings/rating-${product.rating.stars * 10}.png`}/>
                <div className="ml-2 sm:text-xs text-3xl">{product.rating.count}</div>
              </div>

              <div className="-ml-24 mt-2 sm:text-sm text-2xl">
                ${(product.priceCents /100).toFixed(2)}
              </div>

              <div className="-ml-24 mt-2 border mb-6">
                <select className="text-2xl sm:text-sm">
                  {[...Array(10).keys()].map((n) => (
                      <option key={n} value={n+1}>
                        {n+1}
                      </option>
                  ))}
                </select>
              </div>

              <div className="flex-1"></div>

              {button.has(product.key) && (
                <div className="flex items-center text-xs text-green-700 animate-slideright mb-3">
                <img className="h-5" src="src/assets/images/icons/checkmark.png"/>
                  Added
                </div>
              ) } 
          
                
              <div className="">
                <button className="bg-yellow-400 rounded-3xl w-full sm:text-sm text-xl sm:font-bold hover:bg-yellow-300 p-3" 
                onClick={() => {
                  showButton(product.key)
                  AddToCart(product)
                }
              }
                > Add to Cart</button>
              </div>
              
          </div>
          
          ))}
       
        </div>  
      </>
    )}
  </div>

  )


}

export default Features;