import { useState } from 'react';
import loginImage from '../assets/images/lgoinPage.jpg';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const validateEmail = (email: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: '' }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let valid = true;
        const newErrors: any = {};

        if (!formData.email) {
            valid = false;
            newErrors.email = 'Please enter your email.';
        } else if (!validateEmail(formData.email)) {
            valid = false;
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!formData.password) {
            valid = false;
            newErrors.password = 'Please enter your password.';
        }

        if (!valid) {
            setErrors(newErrors);
            return;
        }
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="login-main-container">
            <div className="card loginCard" style={{ height: '100%' }}>
                <div className="row w-100 h-100">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img
                            src={loginImage}
                            alt="Restaurant Logo"
                            className="login-image"
                            width={"85%"}
                            height={'auto'}
                        />
                    </div>
                    <div className="col-6 d-flex">
                        <div className="card loginFormCard" style={{ width: '100%', height: "100%" }}>
                            <div className="text-center my-4">
                                <img src={loginImage} alt="" width="50px" height="auto" />
                            </div>
                            <h1 className="card-title text-center welcomeHeader">Welcome Back!</h1>
                            <p className="card-text text-center">Please enter your details.</p>

                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3 text-start">
                                        <label htmlFor="email" className="form-label textGray">Email address</label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <div className='position-relative'>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                id="password"
                                                placeholder="Enter your password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                            />
                                            {errors.password ? <div className="invalid-feedback">{errors.password}</div> :
                                                <span
                                                    className="position-absolute top-50 end-0 translate-middle-y me-3"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}></i>
                                                </span>
                                            }
                                        </div>
                                    </div>
                                    <div className="text-start my-2">
                                        <p className='textGray'>Forgot Password?</p>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100 buttonBorder"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
