import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Login Data Submitted:", data);
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label>Password:</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <div className="forgot-password-link">
          <Link to="/reset-email">Forgot your password?</Link>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;