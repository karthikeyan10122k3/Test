import SelectState from "./SelectState";

const GovernmentSignUp = () => {
  return (
    <div className="form signup">
      <p>Government Authority signin</p>
      <span className="title">Registration</span>
      <form action="#">
        <SelectState />
        <div className="input-field gov-input">
          <input type="text" placeholder="Enter your email" required />
          <i className="uil uil-envelope icon" />
        </div>
        <div className="input-field gov-input">
          <input
            type="password"
            className="password"
            placeholder="Create a password"
            required
          />
          <i className="uil uil-lock icon" />
        </div>
        <div className="input-field gov-input">
          <input
            type="password"
            className="password"
            placeholder="Confirm a password"
            required
          />
          <i className="uil uil-lock icon" />
          <i className="uil uil-eye-slash showHidePw" />
        </div>
        <div className="input-field button">
          <a href="dash.html">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default GovernmentSignUp;
