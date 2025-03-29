import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Register.css"

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 

 
  function onSubmit (data) {
    console.log("Form Data Submitted:", data);
  };

  return (
    <>
    <Header/>
    <div className="register-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
    
        
        <label >Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

     
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

       
        

        <button type="submit">Register</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Register;
