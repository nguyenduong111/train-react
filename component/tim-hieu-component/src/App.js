import React, { useState } from "react";
import Con from "./components/con";
import Con_2 from "./components/con-2";

function App() {
  const name = "duong";
  const [myId, setId] = useState({
    id: 110101,
  });

  const onChange = (data) => {
    setId({
      id: data.id,
    });
  };

  return (
    <div>
      <h1>Cách component cha thay đổi giá trị của state của component con</h1>
      <Con name={name} />

      <h1>----------------------------------------------------------------</h1>

      <h1>
        Cách component con thay đổi giá trị của props từ component cha truyền
        vào
      </h1>
      <h2> {myId.id} </h2>
      <Con_2 onChange={onChange} />
    </div>
  );
}

export default App;
