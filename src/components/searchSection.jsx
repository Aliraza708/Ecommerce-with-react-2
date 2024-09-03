
function Searchbar({onpress,products,category,selectedcatagory}) {
   const items = products.map((data)=>data.category)
   const categoryes = items.filter((data,index) => items.indexOf(data)==index )
   

    return (
        <div className="bg-gray-100 text-gray-700 ">
            <section className="container p-8 flex  justify-center">
                <div className="text-center">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="shadow appearance-none border rounded-l w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={onpress}
                    />

                    <select value={selectedcatagory}  onChange={category} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                        <option>
                            Select a category
                        </option>
                        {categoryes.map((data,index)=>(
                            <option key={index} value={data}>{data}</option>
                            
                        ))}
                       
                    </select>
                </div>
            </section>

        </div>

    )
}

export default Searchbar