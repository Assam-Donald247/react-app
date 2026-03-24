import "./header.css";
import ArrowLeft from "./../ArrowLeft.svg"


function Head() {
  return (
    <div className="head">
      <a href="" className="closeBtn" >
        <img src={ArrowLeft} alt="Arrow" />
      </a>
      <h2>CREATE YOUR ACCOUNT</h2>
      <p>
        Already have an account? <a href="#" className="button-color">Log in</a>
      </p>
      <div className="main-text">
        <p>
          100% DEPOSIT MATCH BONUS UP TO ₦100,000* <br />
          *New Customers only. Terms apply. Bet responsibly. 18+
        </p>
      </div>
    </div>
  );
}

export default Head;
