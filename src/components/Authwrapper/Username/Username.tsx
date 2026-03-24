import "./Username.css";

function UserName() {
  return (
    <div className="user-name">
      <label>
        Username
        <input className="user" placeholder="e.g ABMax" />
      </label>
    </div>
  );
}

export default UserName;
