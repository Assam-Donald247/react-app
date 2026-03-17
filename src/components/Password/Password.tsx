import './password.css'

function PassWord() {
  return (
    <div className = 'pass-word'>
      <p>Password</p>
      <label>
        <input type='password' className="password" placeholder="Enter your password" />
      </label>
    </div>
  );
}

export default PassWord;
