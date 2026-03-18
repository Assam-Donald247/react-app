import "./authwrapper.css";
import Head from "./Header/Header";
import Continue from "./RegisterB/Register";
import AgeConfirm from "./AgeConfirm/AgeConfirm";
import Footer from "./Foot/Footer";
import InputField from "./Input Field/InputField";

function Authwrapper ()  {
  return (
    <div className="wrapper">
      {/* <body>{children}</body> */}
      <Head />
      <InputField />
      <AgeConfirm />
      <Continue title="Continue" />
      <Footer />
    </div>
  );
};

export default Authwrapper;
