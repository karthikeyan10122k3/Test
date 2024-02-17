import SelectState from "./SelectState";

const InstitutionSignUp = () => {
  return (
    <div className="form signup">
      <p>Institution Management signin</p>
      <span className="title">Registration</span>
      <form action="#">
        <div className="input-field">
          <input type="text" placeholder="Enter Institution name" required />
          <i className="uil uil-user" />
        </div>
        <SelectState />
        <div className="input-field">
          <input type="text" placeholder="Enter Institution email" required />
          <i className="uil uil-envelope icon" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter Institution Code" required />
          <i className="uil uil-envelope icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            className="password"
            placeholder="Create a password"
            required
          />
          <i className="uil uil-lock icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            className="password"
            placeholder="Confirm a password"
            required
          />
          <i className="uil uil-lock icon" />
          <i className="uil uil-eye-slash showHidePw" />
        </div>
        <div className="checkbox-text">
          <div className="checkbox-content">
            <input type="checkbox" id="termCon" />
            <label htmlFor="termCon" className="text">
              I accepted all terms and conditions
            </label>
          </div>
        </div>
        <div className="input-field button">
          <a href="dash.html">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default InstitutionSignUp;
