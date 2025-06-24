import Navbar    from "../Components/Navbar.jsx";
import SelecColor from "../Components/SelecColor.jsx";
import SelectSize from "../Components/SelectSize.jsx";
import SelectStyle   from "../Components/SelectStyle.jsx";
import {useState} from "react";


const Main = () => {
    const[count,setcount]=useState(0);
    const[selectedcolor,setselectedcolor]=useState('red');
    const[colorprice,setcolorprice]=useState(0);
    const[selectedsize,setselectedsize]=useState('M');
    const[sizeprice,setsizeprice]=useState(0);
    const[selectedstyle,setselectedstyle]=useState('Hoodie');
    const Total= colorprice+sizeprice;
    return(
        <div>
            {/*<nav className="pt-5">*/}
            {/*    <Navbar Count={count}  setcount={setcount}/>*/}
            {/*</nav>*/}
            <div className="pt-11">
                <h4 className="w-1/2 mx-auto bg-white h-15 flex items-center justify-center mb-4 hover:text-3xl transition duration-1000npm run dev">Customize Your Outfit</h4>
            </div>
            <div className="bg-amber-100 h-25 flex-col pt-5">
                <SelecColor selectedcolor={selectedcolor} setselectedcolor={setselectedcolor} setcolorprice={setcolorprice}/>
                <SelectSize selectedsize={selectedsize} setselectedsize={setselectedsize} setsizeprice={setsizeprice} />
                <SelectStyle  selectedstyle={selectedstyle} setselectedstyle={setselectedstyle}/>
                <div className="flex justify-center">
                    <button onClick={()=>{
                        setcount(count+1)
                    }} className="bg-amber-500 h-20 w-32 rounded-2xl mb-5">Add To Cart</button>
                </div>
            </div>
            <div>
                <h3>{selectedcolor}</h3>
                <h3>{selectedsize}</h3>
                <h3>{selectedstyle}</h3>
                <h3>{colorprice}</h3>
                <h3>{sizeprice}</h3>
                <h3>{Total}</h3>
            </div>

        </div>
    );
};

export default Main;
