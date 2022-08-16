import { useContext, useRef, useState } from "react";
import { AuthContex } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo";
import Container from "../../components/container/container";
import "./login.scss";

const Login = () => {
  const { setToken } = useContext(AuthContex);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    if (emailValue && passwordValue) {
      setLoading(true);
      fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setToken(data.token);
          navigate("/");
        })
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <Container className="login__container">
      <Logo />
      <div className="login-list">
        <h3 className="login-title">Login</h3>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <input
            className="email-input"
            ref={emailRef}
            name="Email"
            placeholder="Email"
            aria-label="Email"
            type="email"
          />
          <input
            className="password-input"
            ref={passwordRef}
            name="Password"
            placeholder="Password"
            aria-label="Password"
            type="password"
          />
          <button className="login-btn" disabled={loading} type="submit">
            Submit
          </button>
          <span style={{ color: "red" }}>{error}</span>
          <span>email: eve.holt@reqres.in</span>
          <span>parol xohlaganizdek</span>
        </form>
      </div>
    </Container>
  );
};
export default Login;
