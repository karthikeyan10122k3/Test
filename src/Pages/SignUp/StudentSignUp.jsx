import SelectState from "./SelectState";

const StudentSignUp = () => {
  return (
    <div className="form signup">
      <p>Student signin</p>
      <span className="title">Registration</span>
      <form action="#">
        <div className="input-field">
          <input type="text" placeholder="Enter your name" required />
          <i className="uil uil-user" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter your email" required />
          <i className="uil uil-envelope icon" />
        </div>
        <div className="input-field">
          <input type="tel" placeholder="Enter mobile number" required />
          <i className="uil uil-envelope icon" />
        </div>
        <SelectState />
        <div className="input-field">
          <input type="text" placeholder="Enter Institute name" required />
          <i className="uil uil-envelope icon" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter Institute code" required />
          <i className="uil uil-envelope icon" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter EMIS Number" required />
          <i className="uil uil-envelope icon" />
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

export default StudentSignUp;
