import './confirmpass.css'

function ConfirmPass() {
  return (
    <div className='confirmPass'>
      <label>
        Confirm Password
        <input type= 'password' className="confirm-pass" placeholder="Confirm Password" />
      </label>
    </div>
  );
}

export default ConfirmPass;
