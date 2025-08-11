import { useCart } from "../context/CartContext";
import ProductPreview from "../Components/ProductPreview";


const Cart = () => {
  const { cartItems } = useCart();

  const defaultCustomTextPos = { x: 80, y: 80, width: 120, height: 40 };
  const defaultCustomText2Pos = { x: 100, y: 100, width: 120, height: 40 };
  const defaultLogoPos = { x: 60, y: 60, width: 80, height: 80 };


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>

      {cartItems.length === 0 ? (
        <p className="h-10 w-full text-lg font-extrabold bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 
text-amber-900 flex items-center justify-center border border-amber-400 rounded-lg shadow-md font-mono tracking-wide">
  🛍️ Your Cart is Empty
</p>

      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-3 rounded-md shadow-sm bg-white">
              <p><strong>Color:</strong> {item.color}</p>
              <p><strong>Size:</strong> {item.size}</p>
              <p><strong>Style:</strong> {item.style}</p>
              <p><strong>Price:</strong> ₹{item.price}</p>
              <button
              className="p-3 h-7 w-15 bg-red-600 flex items-center justify-center text-white mt-3"
              onClick={()=>{
                alert("Order Placed Sucessfully");
              }}
              >Order
              </button>
              <ProductPreview 
              selectedcolor={item.color}
              selectedstyle={item.style}
              customText={item.customText}
              customtext2={item.customtext2}
              logo={item.logo}
              customTextPos={item.icustomTextPos || defaultCustomTextPos}
              customtext2Pos={item.customtext2Pos}
              logoPos={item.logoPos}
              />
            </li>
          ))}
        </ul>
      )
      
    }
     
    </div>
  );
};

export default Cart;
