import { useState } from "react";
import "./App.css";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="card">
        <div className={`card-bg ${isLogin ? "" : "login"}`}></div>

        {/* LOGIN HERO */}
        <div className={`hero login ${isLogin ? "active" : ""}`}>
          <h2>Hello there</h2>
          <p>Begin your journey using this software.</p>
          <button onClick={() => setIsLogin(false)}>SIGN UP</button>
        </div>

        {/* LOGIN FORM */}
        <div className={`form login ${isLogin ? "active" : ""}`}>
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>LOGIN</button>
        </div>

        {/* REGISTER HERO */}
        <div className={`hero register ${!isLogin ? "active" : ""}`}>
          <h2>Welcome back</h2>
          <p>Login to continue</p>
          <button onClick={() => setIsLogin(true)}>LOGIN</button>
        </div>

        {/* REGISTER FORM */}
        <div className={`form register ${!isLogin ? "active" : ""}`}>
          <h2>Sign Up</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}
