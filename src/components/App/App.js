import Header from "../myHeader/header";
import Button from "../myButton/button";
import MyModal from "../MyModal/input";
import { useState } from "react";

function App() {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div className="App">
      <MyModal active={modalActive} setActive={setModalActive} />
      <Header />
      <Button onClick={() => setModalActive(true)} />
    </div>
  );
}

export default App;
