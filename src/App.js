import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/form";
import Success from "./components/success";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/success" element={<Success/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
