/** @format */

import "./App.css";
import image from "./b3.png";

function App() {
  return (
    // Wrapper Section
    <section className="w-full h-[500px] relative ">
      {/* Independent overlay div with gradient bg color taking the whole height and width */}
      {/* CustomGradientOverlay comes from index.css */}
      <div className="customGradientOverlay absolute w-full h-full z-[99]"></div>

      {/* Image taking 2/3 of width.. Might be better to make it an absolute width?*/}
      <img className="h-full w-2/3" src={image}></img>

      {/* Text Container on top of section positioned absolute to section parent */}
      <div className="absolute left-[65%] bottom-[40%]  z-[100]">
        <div className=" w-full h-full text-center">
          <h1 className="text-[#ffffff] text-3xl">Some Interesting Tile</h1>
          <p>Some Interesting text</p>
        </div>
      </div>
    </section>
  );
}

export default App;
