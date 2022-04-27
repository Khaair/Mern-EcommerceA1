import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function AddProduct(props) {
  const [Images, setImages] = useState('');
  const [title, setTitle] = useState('');
  const [skunumber, setSkunumber] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [weaight, setWeaight] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [brand, setBrand] = useState(''); 
  const [discount, setDiscount] = useState('');
  const [stock, setStock] = useState('');
  const [shippingdetails, setShippingdetails] = useState('');
  const [manufacturesdetails, setManufacturesdetails] = useState('');
  const [selectedsize, setSelectedsize] = useState('');
  const [feature, setFeature] = useState('');
  const [trend, setTrend] = useState('');
  





  const [msg, setMsg] = useState('');



  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");


  const notify = () => toast(msg);

  console.log(msg)


  const navigate = useNavigate();

  const sendDatatoApp = async () => {

    setLoading(true)

    const variables = {

        Images,
        title,
        skunumber,
        description,
        price,
        quantity,
        weaight,
        category,
        subcategory,
        brand,
        discount,
        stock,
        shippingdetails,
        manufacturesdetails,
        selectedsize,
        feature,
        trend,
  
      }


    let x;
    try {
      x = await axios.post('http://localhost:5000/api/product/uploadProduct', variables, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth')
        }
      })
      setLoading(false)
      console.log(x.data.success, 'success')
    } catch (er) {
      setLoading(false)
      setMsg(er.response.data.message.msg)
      notify()

      console.log(er.response.data.message.msg)

    }

    if (x.data.success) {
      navigate('/deshboard')

    }
    else {
      setLoading(false)
      navigate('/addproduct')
    }

  }


  return (
    <>
      <ToastContainer />
 

      


     {loading == true ?
     <div className="sweet-loading">

     <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>

    :
    <div className='container'>
    <form action="">
      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Image</label>
        <input className="form-control" value={Images} onChange={(e) => setImages(e.target.value)} style={{ margin: "12px" }} placeholder="Enter Image" />
      </div>
      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Title</label>
        <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} style={{ margin: "12px" }} placeholder="Enter title" />
      </div>
      <div className="form-group mt-5 ">
        <label htmlFor="">Enter skunumber</label>
        <input className="form-control" value={skunumber} onChange={(e) => setSkunumber(e.target.value)} style={{ margin: "12px" }} placeholder="Enter skunumber" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Description</label>
        <input className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} style={{ margin: "12px" }} placeholder="Enter description" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Price</label>
        <input className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} style={{ margin: "12px" }} placeholder="Enter price" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Quantity</label>
        <input className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{ margin: "12px" }} placeholder="Enter quantity" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Weaight</label>
        <input className="form-control" value={weaight} onChange={(e) => setWeaight(e.target.value)} style={{ margin: "12px" }} placeholder="Enter weaight" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter category</label>
        <input className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} style={{ margin: "12px" }} placeholder="Enter category" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter subcategory</label>
        <input className="form-control" value={subcategory} onChange={(e) => setSubcategory(e.target.value)} style={{ margin: "12px" }} placeholder="Enter Subcategory" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter brand</label>
        <input className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)} style={{ margin: "12px" }} placeholder="Enter brand" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter discount</label>
        <input className="form-control" value={discount} onChange={(e) => setDiscount(e.target.value)} style={{ margin: "12px" }} placeholder="Enter discount" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter stock</label>
        <input className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} style={{ margin: "12px" }} placeholder="Enter stock" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter shippingdetails</label>
        <input className="form-control" value={shippingdetails} onChange={(e) => setShippingdetails(e.target.value)} style={{ margin: "12px" }} placeholder="Enter shippingdetails" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter manufacturesdetails</label>
        <input className="form-control" value={manufacturesdetails} onChange={(e) => setManufacturesdetails(e.target.value)} style={{ margin: "12px" }} placeholder="Enter manufacturesdetails" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter selectedsize</label>
        <input className="form-control" value={selectedsize} onChange={(e) => setSelectedsize(e.target.value)} style={{ margin: "12px" }} placeholder="Enter selectedsize" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter feature</label>
        <input className="form-control" value={feature} onChange={(e) => setFeature(e.target.value)} style={{ margin: "12px" }} placeholder="Enter feature" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter trend</label>
        <input className="form-control" value={trend} onChange={(e) => setTrend(e.target.value)} style={{ margin: "12px" }} placeholder="Enter trend" />
      </div>

     
      <button className="btn btn-primary mt-3" type="button" onClick={sendDatatoApp} >Add Product</button>
    </form>
  
  </div>
    
    }



    </>


  )
}

export default AddProduct