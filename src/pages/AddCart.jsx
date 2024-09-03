import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function AddCart(){
    const [product,SetProducts] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`).then((ress)=>ress.json()).then((data)=>SetProducts(data))
    },[])
    console.log(product)
    const {title,description,image,price,}= product
    return(

<div className="bg-gray-100 text-gray-700">
  {/* Cart Section */}
  <section className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Cart Item */}
      <div className="grid grid-cols-4 gap-6 mb-6 items-center">
        <div className="col-span-1">
          <img
            src={image}
            alt="Product Image"
            className="w-full rounded"
          />
        </div>
        <div className="col-span-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="text-right">
        <h4 className="text-xl font-semibold mb-4">Total: ${price}</h4>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy
        </button>
      </div>
    </div>
  </section>
</div>

    )
}

export default AddCart