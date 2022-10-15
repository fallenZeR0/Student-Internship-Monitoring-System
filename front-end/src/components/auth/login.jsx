import React, {useState} from "react";
import img from "../../assets/img/bg.png";
import logo from "../../assets/img/logo.svg";
// import bgWaves from "../../assets/img/bg-waves.svg";
import {FaUserAlt, FaLock} from "react-icons/fa";
import {IconContext} from "react-icons";

const Login = () => {
  const [hasUsername, setHasUsername] = useState(false);
  const [hasPassword, setHasPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnchange = (value, input) => {
    switch (input) {
      case "username":
        return value ? setHasUsername(true) : setHasUsername(false);

      case "password":
        return value ? setHasPassword(true) : setHasPassword(false);
      default:
    }
  };
  return (
    <main className="login">
      {/* <img className="bg-waves" src={bgWaves} alt="" /> */}
      <section className="login-container">
        <div className="left-card">
          <img src={logo} alt="" />
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <IconContext.Provider value={{color: "#f1faee"}}>
              <label htmlFor="username">
                <span>
                  <FaUserAlt />
                </span>
                <input
                  style={
                    hasUsername ? {padding: "0.5rem 0.5rem 0.5rem 6rem"} : null
                  }
                  onChange={(e) => handleOnchange(e.target.value, e.target.id)}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
              </label>
              <label htmlFor="password">
                <span>
                  <FaLock />
                </span>
                <input
                  style={
                    hasPassword ? {padding: "0.5rem 0.5rem 0.5rem 6rem"} : null
                  }
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => handleOnchange(e.target.value, e.target.id)}
                  placeholder="Password"
                />
              </label>

              <div className="options">
                <label htmlFor="remember-me">
                  <input type="checkbox" name="remeber-me" id="remember-me" />
                  <p>Remember Me</p>
                </label>
                <a href="https://web.facebook.com/?_rdc=1&_rdr">
                  Forgot Password
                </a>
              </div>

              <button type="submit">Login</button>
            </IconContext.Provider>
          </form>
          <a href="https://web.facebook.com/?_rdc=1&_rdr">Create Account</a>
        </div>
        <div className="right-card">
          <img src={img} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Login;
