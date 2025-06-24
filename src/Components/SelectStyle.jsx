const SelectStyle = ({selectedstyle,setselectedstyle})=>{
    return(
        <div className="flex justify-end mb-6 mt-6 mr-44 mb-10">
            <label className="font-semibold flex gap-5">
               Choose Style:
              <select value={selectedstyle} onChange={(e)=> setselectedstyle(e.target.value)}>
                  <option value="Hoodie">Hoodie</option>
                  <option value="Round-neck">Round neck</option>
                  <option value="Coller-neck">Coller-neck</option>
              </select>
            </label>
        </div>
    );
}

export default SelectStyle;