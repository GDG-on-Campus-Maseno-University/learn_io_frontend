import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/EmailInput.css';

const ResetEmailForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Reset link sent to:', data.email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="email-form w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-bold">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email'
                                }
                            })}
                            className="w-full p-2 border rounded-lg"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Send Reset Link</button>
                </form>
            </div>
        </div>
    );
};

export default ResetEmailForm;
