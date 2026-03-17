import './Username.css'

function UserName() {
  return (
    <div className ='user-name'>
      <p>Username</p>
      <label>
        <input className="user" placeholder="e.g ABMax" />
      </label>
    </div>
  );
}

export default UserName;
