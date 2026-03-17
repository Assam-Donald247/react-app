import './AgeConfirm.css'

function AgeConfirm() {
  return (
    <div className="confirm-age">
      <label className='label-text'>
        <input  type="checkbox" />
        Confirm you are 18 or over, agree to the <a href="#">T&Cs</a>,{" "}
        <a href="#"> Cookie Policy</a>, and that your data will be processed in
        accordance with our <a href="#">Privacy Policy</a>
      </label>
    </div>
  );
}

export default AgeConfirm;
