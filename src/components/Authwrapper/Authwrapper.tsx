import "./authwrapper.css";
import Head from "./Header/Header";
import Continue from "./RegisterB/Register";
import AgeConfirm from "./AgeConfirm/AgeConfirm";
import Footer from "./Foot/Footer";
import InputField from "./Input Field/InputField";
// import ArrowLeft from "./../ArrowLeft.svg"

function Authwrapper ()  {
  return (
    <div className="wrapper">
      
      <Head />
      <InputField />
      <AgeConfirm />
      <Continue />
      <Footer />
    </div>
  );
};

export default Authwrapper;
