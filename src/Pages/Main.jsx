import Navbar from "../Components/Navbar.jsx";
import SelecColor from "../Components/SelecColor.jsx";
import SelectSize from "../Components/SelectSize.jsx";
import SelectStyle from "../Components/SelectStyle.jsx";
import ProductPreview from "../Components/ProductPreview.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const [selectedcolor, setselectedcolor] = useState('red');
  const [colorprice, setcolorprice] = useState(0);
  const [selectedsize, setselectedsize] = useState('M');
  const [sizeprice, setsizeprice] = useState(0);
  const [selectedstyle, setselectedstyle] = useState('Hoodie');
  const[styleprice,setstyleprice] = useState(0);
  const[customText,setcustomText]=useState('');
  const[customtext2,setcustomtext2] = useState('');
  const[logo,setlogo] = useState(null);
  const[print,setprint]=useState("");

  const [customTextPos, setCustomTextPos] = useState({ x: 80, y: 80, width: 120, height: 40 });
  const [customtext2Pos, setCustomtext2Pos] = useState({ x: 100, y: 100, width: 120, height: 40 });
  const [logoPos, setLogoPos] = useState({ x: 60, y: 60, width: 80, height: 80 });
 
  const hastext = print.trim()!=="";
  const extracost= (hastext)?100:0;
  const Total = colorprice + sizeprice + styleprice+ extracost;



  const handletoLogoUpload = (e) =>{
    const file =e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () =>setlogo(reader.result);
      reader.readAsDataURL(file);
    }
  }

 const navigate = useNavigate();
 const {addToCart} = useCart();

  const handleAddToCart = () => {
    const newItem = {
      color: selectedcolor,
      size: selectedsize,
      style: selectedstyle,
      price: Total,
      customText: customText,
      customtext2: customtext2,
      logo: logo,
      customTextPos: customTextPos || { x: 80, y: 80, width: 120, height: 40 },
      customtext2Pos: customtext2Pos || { x: 100, y: 100, width: 120, height: 40 },
      logoPos: logoPos || { x: 60, y: 60, width: 80, height: 80 }
    };
    addToCart(newItem);
    navigate("/Cart");
  };

  return (
    <div>
      <div className="pt-10 mx-20">
        <h4 className="h-10 w-full text-lg bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 mb-5 
        rounded-lg flex items-center justify-center font-amber-900 border-amber-500 font-mono tracking-wide
        mx-5">
          Customize Your Outfit
        </h4>
      </div>

      <div className="bg-amber-100 h-50 py-4 px-4">
       <div className="flex flex-col md:flex-row justify-evenly items-start gap-10">


        <div className="flex justify-center pt-10">
        <ProductPreview 
        selectedcolor={selectedcolor} 
        selectedstyle={selectedstyle}
        customText={customText}
        customtext2={customtext2}
        logo={logo}
        customTextPos={customTextPos}
        customtext2Pos={customtext2Pos}
        logoPos={logoPos}
        editable={true}
        onUpdatePositions={(key,value)=>{
          if(key==="customTextPos") setCustomTextPos(value);
          if(key==="customtext2Pos") setCustomtext2Pos(value);
          if(key=="logoPos") setLogoPos(value);
        }}
         />
        </div>

        <div className="flex flex-col space-y-5 w-full max-w-sm">
        <SelecColor
          selectedcolor={selectedcolor}
          setselectedcolor={setselectedcolor}
          setcolorprice={setcolorprice}
        />

        <SelectSize
          selectedsize={selectedsize}
          setselectedsize={setselectedsize}
          setsizeprice={setsizeprice}
        />

        <SelectStyle
          selectedstyle={selectedstyle}
          setselectedstyle={setselectedstyle}
          setstyleprice={setstyleprice}
        />
         <div className="flex-col gap-4">
        <input
         type="text"
         placeholder="Enter your Text 1"
         value={customText}
         onChange={(e) => {
          setcustomText(e.target.value)
          setprint("Hello");
        }}
         className="border p-2 mb-3"
         />
        <input
        type="text"
        placeholder="Enter Your Text 2"
        value={customtext2}
        onChange={(e) => setcustomtext2(e.target.value)}
        className="border p-2 mb-3"
        /> 


         <input 
         type="file"
         accept="image/*"
         onChange={handletoLogoUpload}
         />

         </div>

        
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from bg-amber-500 to-amber-600 h-20 w-32 rounded-2xl mb-5 hover :to-bg-amber-600 transition duration-300 shadow-md text-white"
          >
            Add To Cart
          </button>
         
        </div>
        </div>
      
      </div>

   
      <div className="p-4 bg-slate-200 w-full my-5">
        <h5 className="font-bold">Preview: </h5>
        <h3>Selected Color: {selectedcolor}</h3>
        <h3>Selected Size: {selectedsize}</h3>
        <h3>Selected Style: {selectedstyle}</h3>
        <h5 className="font-bold">Prices: </h5>
        <h3>Color Price: ₹{colorprice}</h3>
        <h3>Size Price: ₹{sizeprice}</h3>
        <h3>Style Peice: ₹{styleprice}</h3>
         {extracost==100 && (<h3>Text Selected:₹100</h3>)}
        <h4>Total Price: ₹{Total}</h4>
      </div>
    </div>
  );
};

export default Main;
