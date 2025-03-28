// src/components/ResetPassword.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import '../styles/ResetPassword.css'; // Import your CSS file

const ResetPassword = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    // Watch password for validation
    const password = watch("password");

    // Handle form submission
    const onSubmit = (data) => {
        console.log("Password reset data:", data);
    };

    return (
        <div className="reset-container">
            <form onSubmit={handleSubmit(onSubmit)} className="reset-form">
                <h2>Reset Password</h2>

                <div className="input-group">
                    <label htmlFor="password">New Password</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            {...register("password", { required: "Password is required" })}
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword", {
                            required: "Confirmation is required",
                            validate: value =>
                                value === password || "Passwords do not match"
                        })}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                </div>

                <button type="submit" className="submit-btn">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;
