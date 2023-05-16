import { useState } from "react";
interface colors {
  bgColor: string;
  clickMe: string;
  clickTwo: string;
  clickThree: string;
  dont: string;
}
function App() {
  const [color, setColor] = useState<colors | null>(null);

  function random1() {
    setColor({
      bgColor: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()}`,
      clickMe: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()}`,
      clickTwo: `#`,
      clickThree: `#`,
      dont: `#`,
    });
  }
  function random2() {
    setColor({
      bgColor: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()}`,
      clickMe: ``,
      clickTwo: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()}`,
      clickThree: `#`,
      dont: `#`,
    });
  }

  function random3() {
    setColor({
      bgColor: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()}`,
      clickMe: `#`,
      clickTwo: `#`,
      clickThree: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()}`,
      dont: `#`,
    });
  }

  function random4() {
    setColor({
      bgColor: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()}`,
      clickMe: `#`,
      clickTwo: `#`,
      clickThree: `#`,
      dont: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()}`,
    });
  }

  return (
    <div
      className=" h-[100vh] text-center "
      style={{ backgroundColor: color?.bgColor }}
    >
      <div className="text-4xl font-bold flex justify-center">
        {" "}
        <div className="m-5"> Randomize Color</div>
      </div>
      <div className="flex justify-between mx-5">
        <button
          onClick={random1}
          style={{ backgroundColor: color?.clickMe }}
          className=" border-[1px] border-black p-1 cursor-pointer"
        >
          Click Me
        </button>
        <button
          onClick={random2}
          style={{ backgroundColor: color?.clickTwo }}
          className=" border-[1px] border-black p-1 cursor-pointer"
        >
          Click Two
        </button>
        <button
          onClick={random3}
          style={{ backgroundColor: color?.clickThree }}
          className=" border-[1px] border-black p-1 cursor-pointer"
        >
          Click Three
        </button>
        <button
          onClick={random4}
          style={{ backgroundColor: color?.dont }}
          className=" border-[1px] border-black p-1 cursor-pointer"
        >
          Don't
        </button>
      </div>
    </div>
  );
}

export default App;
