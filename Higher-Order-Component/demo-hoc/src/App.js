import React from "react";
import withHoverOpacity from "./components/HoverOpacity";
import Img from "./components/Img";

const ImgHover_1 = withHoverOpacity(Img);
const ImgHover_2 = withHoverOpacity(Img);

function App() {
  return (
    <div>
      <ImgHover_1
        src={
          "https://cdn-aooek.nitrocdn.com/jADLkKldCLyvbzneZqCzAXMpXrnxnSeV/assets/static/optimized/rev-fe9ac44/originals/3d/c4/49/3dc449b04d9ace524a0ecd247e1fdc83.png"
        }
      />

      <ImgHover_2
        src={"https://i0.wp.com/wallpaperaccess.com/full/203524.jpg"}
      />
    </div>
  );
}

export default App;
