import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() 
{
  const [products, setProducts]= useState([])
  const [productTitle, setProductTitle]= useState("")
  const [productPrice, setProductPrice]= useState(0)
  const [productDescription, setProductDescription]= useState("")

  useEffect(() =>
  {
  axios.get('http://localhost:8000/api/products')
  .then(response=>
    {
    console.log(response.data);
    setProducts(response.data)
    })
  .catch(error=> console.log("error",error))
  },[])

  const createProduct = (e) =>
  {
    e.preventDefault();
    console.log("Title :", productTitle);
    console.log("Price :", productPrice);
    console.log("Description :", productDescription);
    const newProduct= {Title:productTitle,Price:productPrice, Description:productDescription};
    setProductTitle("")
    setProductPrice(0)
    setProductDescription("")
    console.log(newProduct);
    axios.post('http://localhost:8000/api/products',newProduct)
    .then(response=>console.log("Product created ✅", response))
    .catch(error=> console.log("❌❌❌error",error))
  }

  return (
    <div className="App">
    <h1>Products🆕🆕🆕</h1>
    <p>
      Title : {JSON.stringify(productTitle)}<br/>
      Price : {JSON.stringify(productPrice)}<br/>
      Description : {JSON.stringify(productDescription)}<br/>
    </p>
    <form onSubmit={createProduct}>
      Product Title: <input onChange={(e)=>setProductTitle(e.target.value)} value={productTitle} /><br />
      Product Price: <input onChange={(e)=>setProductPrice (e.target.value)} value={productPrice}/><br />
      Product Description: <input onChange={(e)=>setProductDescription (e.target.value)} value={productDescription}/><br/><br/>
      <button>Submit</button>
    </form>
    {
      products.map(product=>
        <div key ={product._id}>
          Title : {product.Title}<br/>
          Price : {product.Price}<br/>
          Description :{product.Description}👨‍🎓
          <hr/>
        </div>
      )
    }
    </div>
  );
}

export default App;
