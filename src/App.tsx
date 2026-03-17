import "./App.css";
import Head from "./components/Header/Header";
import Continue from "./components/RegisterB/Register";
import AgeConfirm from "./components/AgeConfirm/AgeConfirm";
import Footer from "./components/Foot/Footer";
import Authwrapper from "./components/Authwrapper/Authwrapper";
import InputField from "./components/Input Field/InputField";

function App() {
  return (
    <Authwrapper>
      <div className="Signup">
        <div>
          <Head />
        </div>
        <div>
          <InputField />
        </div>
        <div className="Age">
          <AgeConfirm />
        </div>
        <div className="Button">
          <Continue title="Continue" />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Authwrapper>
  );
}

export default App;
