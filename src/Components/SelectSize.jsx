const SelectSize = ({selectedsize,setselectedsize,setsizeprice}) => {
    const Size=[
        {ss: 'S' , price: 100},
        {ss: 'M' ,price: 200},
        {ss: 'L' ,price: 250},
        {ss: 'XL' ,price: 300},
        {ss:'XXL'  ,price: 350},

    ];
    return(
        <div className="flex flex-col items-end  justify-end mt-6 mb-10 mr-44">
            <h3 className=" flex flex-coltext-xl font-semibold mt-5 flex-col ">Select Size</h3>
            <div className="flex gap-4 text-black">
                {Size.map((size)=>
                    (
                        <button
                        key={size.ss}
                        className={`w-10 h-10 rounded-full border-2  ${selectedsize === size.ss ? 'border-black':'border-grey-300'}`}
                        onClick={()=>{
                            setselectedsize(size.ss);
                            setsizeprice(size.price)
                        }}
                        >
                            {size.ss}
                        </button>
                    ))}
            </div>
        </div>
    )
}

export default SelectSize;