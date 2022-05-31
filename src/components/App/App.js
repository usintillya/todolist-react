import Header from "../myHeader/header";
import MyModal from "../MyModal/input";
import myButton from "../myButton/myButton";
import { useState } from "react";

/* TODO: 
    1) Fix Input:focus and Select:focus
    2) Make styles for Input and Select 
    3) Decompose and refactor CSS code (at the ending)
    4) FixCases of components (starts from UpperCase)
*/

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      <MyModal active={modalActive} setActive={setModalActive} />
      <Header />
      <myButton className="myBtn" onClick={() => setModalActive(true)}>
        add your todo
      </myButton>
    </div>
  );
}

export default App;
