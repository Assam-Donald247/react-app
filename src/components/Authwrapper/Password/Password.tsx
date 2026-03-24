import './password.css'

function PassWord() {
  return (
    <div className = 'pass-word'>
      <label>
        Password
        <input type='password' className="password" placeholder="Enter your password" />
      </label>
    </div>
  );
}

export default PassWord;
