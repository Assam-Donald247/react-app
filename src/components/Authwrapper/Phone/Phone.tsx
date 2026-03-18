import "./tele-style.css"

function PhoneNumber() {
  return (
    <div className="telePhone">
      <p>Phone Number</p>
      <label>
        <input className="tele" placeholder="e.g 0910000000" />
      </label>
      <p>
        Please enter a valid number that can be recieve the OTP required to
        verify your account.
      </p>
    </div>
  );
}

export default PhoneNumber;

{
  /* <div className="form">
    //     <div className='form-container'>
    //         <div className='header'><h2>CREATE YOUR ACCOUNT</h2></div>
    //         <div className='body'> <button onClick={() => {}} >Continue</button>
    //         </div>
    //         <div className='footer'>
    //             <h6>247Bet and the 247Bet logo are trademarks of 247Bet Limited.</h6>
    //             <h6>Copyright &copy; 247Bet Limited {new Date().getFullYear()}. All rights Reserved.</h6>
    //             <button><h6>Privacy Policy</h6></button>
    //             <button>Terms & Conditions</button>
    //             <button>Responsible Gambling</button>
    //             <button>Betting Rules</button>
    //             <button>Cookies</button>
    //             <button>Gamble Resonsibly</button>
    //         </div>
    //     </div>
    // </div> */
}
