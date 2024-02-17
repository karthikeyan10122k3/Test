import GovernmentSignUp from "./GovernmentSignUp";
import InstitutionSignUp from "./InstitutionSignUp";
import StudentSignUp from "./StudentSignUp";
import LoginComponent from "./Login";
import { useState } from "react";

const Container = () => {
  const [user, setUser] = useState({ userUsing: "Student", state: true });
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setUser({ ...user, state: false });
  };

  const handleSignupClick = () => {
    setShowLogin(false);
    setUser({ ...user, state: true });
  };
  return (
    <div className="container">
      <div className="what">
        <p>Are you?</p>
      </div>
      <div className="option">
        <button onClick={() => setUser({ ...user, userUsing: "Government" })}>
          Government
        </button>
        <button onClick={() => setUser({ ...user, userUsing: "Institution" })}>
          Institution
        </button>
        <button onClick={() => setUser({ ...user, userUsing: "Student" })}>
          Student
        </button>
      </div>
      {user.userUsing === "Government" && user.state && <GovernmentSignUp />}
      {user.userUsing === "Institution" && user.state && <InstitutionSignUp />}
      {user.userUsing === "Student" && user.state && <StudentSignUp />}
      {showLogin && <LoginComponent handleSignupClick={handleSignupClick} />}
      {(user.userUsing === "Government" || user.userUsing === "Institution") &&
        !showLogin && (
          <div className="login-signup">
            <span className="text">
              Already a Member?
              <a
                href="#"
                className="text signup-link"
                onClick={handleLoginClick}
              >
                Login Now
              </a>
            </span>
          </div>
        )}
    </div>
  );
};

export default Container;
