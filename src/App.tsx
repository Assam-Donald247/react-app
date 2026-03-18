import "./App.css";
import Head from "./components/Authwrapper/Header/Header";
import Continue from "./components/Authwrapper/RegisterB/Register";
import AgeConfirm from "./components/Authwrapper/AgeConfirm/AgeConfirm";
import Footer from "./components/Authwrapper/Foot/Footer";
import Authwrapper from "./components/Authwrapper/Authwrapper";
import InputField from "./components/Authwrapper/Input Field/InputField";

function App() {
  return (
    <div className="page">
      <Authwrapper />
    </div>
  );
}

export default App;
