const SelecColor = ({ selectedcolor, setselectedcolor, setcolorprice }) => {
    const colors = [
        { name: 'white', price: 400 },
        { name: 'red', price: 300 },
        { name: 'green', price: 200 },
        { name: 'blue', price: 200 },
    ];

    return (
        <div className="flex flex-col items-end  mt-6 mb-3 mr-44">
            <h2 className=" flex flex-col text-xl font-semibold mb-2">Choose Color</h2>
            <div className="flex gap-4 mx-5">
                {colors.map((color) => (
                    <button
                        key={color.name}
                        className={`w-10 h-10 rounded-full border-2 ${
                            selectedcolor === color.name ? 'border-black' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.name }}
                        onClick={() => {
                            setselectedcolor(color.name);
                            setcolorprice(color.price);
                        }}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default SelecColor;
