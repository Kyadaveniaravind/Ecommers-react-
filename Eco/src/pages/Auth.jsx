import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
    const [mode, setMode] = useState("signup");
    
    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors } 
    } = useForm();

    // Logic to handle form submission
    const onSubmit = (data) => {
        if (mode === "signup") {
            console.log("Signing up with:", data);
            alert(`Successfully signed up as ${data.email}`);
        } else {
            console.log("Logging in with:", data);
            alert(`Logged in as ${data.email}`);
        }
       
    };

    // Helper to toggle mode and clear the form
    const toggleMode = () => {
        setMode(mode === "signup" ? "login" : "signup");
        reset(); 
    };

    return (
        <div className="page">
            <div className="container">
                <div className="authcontainer">
                    <h1 className="page-title">
                        {mode === "signup" ? "Create Account" : "Welcome Back"}
                    </h1>
                    
                    <form className="authform" onSubmit={handleSubmit(onSubmit)}>
                        <div className="fromgroup">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input 
                                className={`form-input ${errors.email ? "input-error" : ""}`}
                                type="email" 
                                id="email" 
                                {...register("email", { required: "Email is required" })} 
                            />
                            {errors.email && <span className="error-text">{errors.email.message}</span>}
                        </div>

                        <div className="fromgroup">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input 
                                className={`form-input ${errors.password ? "input-error" : ""}`}
                                type="password" 
                                id="password" 
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Minimum 6 characters" }
                                })} 
                            />
                            {errors.password && <span className="error-text">{errors.password.message}</span>}
                        </div>

                        <button type="submit" className="btn btn-primary btn-large">
                            {mode === "signup" ? "Sign Up" : "Log In"}
                        </button> 

                        <div className="auth-switch">
                            {mode === "signup" ? (
                                <p>Already have an account? <span className="authlink" onClick={toggleMode}>Log In</span></p>
                            ) : (
                                <p>Don't have an account? <span className="authlink" onClick={toggleMode}>Sign Up</span></p>
                            )}
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    );
}