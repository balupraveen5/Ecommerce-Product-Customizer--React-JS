const SelectStyle = ({ selectedstyle, setselectedstyle, setstyleprice }) => {
    const stylePrices = {
      "Hoodie": 200,
      "Round-neck": 180,
      "Coller-neck": 150
    };
  
    const handleChange = (e) => {
      const style = e.target.value;
      setselectedstyle(style);
      setstyleprice(stylePrices[style] || 0);
    };
  
    return (
      <div className="flex justify-end  mt-6 mr-44 mb-10">
        <label className="font-semibold flex gap-5">
          Choose Style:
          <select value={selectedstyle} onChange={handleChange}>
            <option value="Hoodie">Hoodie</option>
            <option value="Round-neck">Round neck</option>
            <option value="Coller-neck">Coller neck</option>
          </select>
        </label>
      </div>
    );
  };
  
  export default SelectStyle;
  