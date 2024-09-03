
import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
function Cardshow({ products, searchItmes, showCatagory }) {
  console.log(products)
  var filter = products.filter((data) => data.title.toLowerCase().includes(searchItmes.toLowerCase()) && data.category.includes(showCatagory))
  if (showCatagory == "Select a category") {
    var filter = products.filter((data) => data.title.toLowerCase().includes(searchItmes.toLowerCase()))
  }
  return (

    <div className="bg-gray-100 flex gap-6 ml-3 items-center justify-between flex-wrap min-h-screen  custom-justify">
      {filter.map((item, index) => (
        <div key={index} className="max-w-80 h-96 bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-32 mt-2 ml-24 h-32 "
            src={item.image}
            alt="Nature Image"
          />
          <div className="p-6">
            <h2 className=" font-semibold text-gray-800 line-clamp-2 ">{item.title}</h2>
            <p className="text-gray-600 mt-2 line-clamp-4 text-justify">
              {item.description}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-500 text-lg">${item.price}</span>
              <Link  to={`${item.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add To Cart
              </Link>
            </div>
          </div>
        </div>

      ))}

    </div>


  )
}

export default Cardshow