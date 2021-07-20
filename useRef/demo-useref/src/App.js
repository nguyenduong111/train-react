import React, { useRef, useState, useEffect } from "react";

import Count from "./components/counting";

function App() {
  // -----------1. thay đổi giá trị biến tham chiếu------------

  // demo 1: counting
  /*
  const count = useRef(0);

  const onClick = () => {
    count.current++;
    console.log("-------------------", count); // current
    console.log("--------------", count.current); // 1 2 3 4 ....
  };

  console.log("I rendered!");                // kiểm tra xem component có render nhiều hơn 1 lần ko

  return (
    <div className="App">
      <button onClick={onClick}> click me </button>
    </div>
  );
}
*/

  // demo 2: stop Watch
  /*
  const timer = useRef(0);               // khởi tạo biến tham chiếu ref
  let [count, setCount] = useState(0);   // khởi tạo state lưu số giây

  const startHandler = () => {
    if (timer.current) {            // check xem timer.current === 0 bắt đầu đếm, !== 0 đang đếm 
      return;
    }
    timer.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timer.current);
    timer.current = 0;
  };

  const resetHandler = () => {
    clearInterval(timer.current);
    setCount(count = 0);
  }

  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  console.log("render!");

  return (
    <div className="App">
      <div>Time: {count}s </div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler} >Reset</button>
      </div>
    </div>
  );
  */

  //-----------2. Truy cập các phần tử DOM------------

  // demo 1:
/*
  const inputRef = useRef();

  useEffect(() => {
    console.log("render-useEffect")   
  }, []);

  const onClick = () => {
    let value = inputRef.current.value;
    console.log(value);
  }

  console.log("render");

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={onClick} > click! </button>
    </div>
  );
*/  
  

// demo forwardRef + useImperativeHandle + useRef (App.js + components/Count.js)
  const ref = useRef();

  return(
    <div>
      <Count ref={ref} />
      <button onClick={() => ref.current.increment()} > click! </button>
      <button onClick={() => ref.current.resetCount()} > Reset! </button>
    </div>
  );


  
}
export default App;
