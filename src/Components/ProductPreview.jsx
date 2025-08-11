import { Rnd } from "react-rnd";

const ProductPreview = ({
  selectedcolor,
  selectedstyle,
  customText,
  customtext2,
  logo,
  customTextPos = { x: 0, y: 0, width: 100, height: 40 },
  customtext2Pos = { x: 0, y: 0, width: 100, height: 40 },
  logoPos = { x: 0, y: 0, width: 80, height: 80 },
  editable = false, // If true → allow moving, else locked for cart preview
  onUpdatePositions
}) => {
  const colorMap = {
    White: "#ffffff",
    red: "#EF4444",
    green: "#22C55E",
    blue: "#3B82F6",
    black: "#000000",
  };

  const styleImage = `/assets/Styles/${selectedcolor}${selectedstyle}.png`;

  return (
    <div className="relative w-64 h-64 mx-auto mt-6 overflow-hidden">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: colorMap[selectedcolor] || "#ffffff",
          mixBlendMode: "multiply",
          opacity: 0.85,
        }}
      ></div>

 
      <Rnd
        position={{ x: customTextPos.x, y: customTextPos.y }}
        size={{ width: customTextPos.width, height: customTextPos.height }}
        bounds="parent"
        disableDragging={!editable}
        enableResizing={editable}
        onDragStop={(e, d) => {
          if (editable) onUpdatePositions("customTextPos", { ...customTextPos, x: d.x, y: d.y });
        }}
        onResizeStop={(e, dir, ref, delta, pos) => {
          if (editable)
            onUpdatePositions("customTextPos", {
              width: parseInt(ref.style.width),
              height: parseInt(ref.style.height),
              ...pos
            });
        }}
        className="absolute z-30 cursor-move text-black select-none"
      >
        <div className="w-full h-full flex justify-center items-center font-bold text-center text-sm">
          {customText}
        </div>
      </Rnd>

    
      <Rnd
        position={{ x: customtext2Pos.x, y: customtext2Pos.y }}
        size={{ width: customtext2Pos.width, height: customtext2Pos.height }}
        bounds="parent"
        disableDragging={!editable}
        enableResizing={editable}
        onDragStop={(e, d) => {
          if (editable) onUpdatePositions("customtext2Pos", { ...customtext2Pos, x: d.x, y: d.y });
        }}
        onResizeStop={(e, dir, ref, delta, pos) => {
          if (editable)
            onUpdatePositions("customtext2Pos", {
              width: parseInt(ref.style.width),
              height: parseInt(ref.style.height),
              ...pos
            });
        }}
        className="absolute z-30 cursor-move text-black select-none"
      >
        <div className="flex justify-center items-center font-bold text-center text-sm">
          {customtext2}
        </div>
      </Rnd>

      {/* Logo */}
      {logo && (
        <Rnd
          position={{ x: logoPos.x, y: logoPos.y }}
          size={{ width: logoPos.width, height: logoPos.height }}
          bounds="parent"
          disableDragging={!editable}
          enableResizing={editable}
          onDragStop={(e, d) => {
            if (editable) onUpdatePositions("logoPos", { ...logoPos, x: d.x, y: d.y });
          }}
          onResizeStop={(e, dir, ref, delta, pos) => {
            if (editable)
              onUpdatePositions("logoPos", {
                width: parseInt(ref.style.width),
                height: parseInt(ref.style.height),
                ...pos
              });
          }}
          className="z-40"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-contain pointer-events-auto"
          />
        </Rnd>
      )}

      {/* Base T-shirt */}
      <img
        src={styleImage}
        alt={`T-shirt - ${selectedcolor}`}
        className="relative z-20 w-full h-full object-contain"
      />
    </div>
  );
};

export default ProductPreview;
