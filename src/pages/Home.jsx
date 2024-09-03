import { useEffect,useState } from "react";
import Cardshow from "../components/Card";
import Searchbar from "../components/searchSection";


 function Home() {
  const [products,SetProducts] = useState([])
  const [sleectCatagory,setcatagory] = useState("") 

  useEffect(()=>{
      fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>SetProducts(data))
  },[])
  const [search,setseatch]=useState("")
  return (
    <div>
  <Searchbar onpress={(e)=>setseatch(e.target.value)} products={products} selectedcatagory={sleectCatagory} category={(e)=>setcatagory(e.target.value)}/>
  <Cardshow products={products} searchItmes={search} showCatagory={sleectCatagory} />
  </div>
  );
}


export default Home
