import PhoneNumber from "../Phone/Phone";
import UserName from "../Username/Username";
import PassWord from "../Password/Password";
import ConfirmPass from "../ConfrimPass/ConfirmPass";

const InputField = () => {
  return (
    <div className="Input-Field">
      <div className="Phone">
        <PhoneNumber />
      </div>
      <div className="User">
        <UserName />
      </div>
      <div className="Password">
        <PassWord />
      </div>
      <div className="Confirm">
        <ConfirmPass />
      </div>
    </div>
  );
};

export default InputField;
