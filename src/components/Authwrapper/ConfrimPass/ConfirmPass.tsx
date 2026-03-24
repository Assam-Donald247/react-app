import './confirmpass.css'

function ConfirmPass() {
  return (
    <div className='confirmPass'>
      <p>Confirm Password</p>
      <label>
        <input type= 'password' className="confirm-pass" placeholder="Confirm Password" />
      </label>
    </div>
  );
}

export default ConfirmPass;
