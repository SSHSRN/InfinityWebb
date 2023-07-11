import "./SignUp.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        let signUpResponse = await axios.post(process.env.REACT_APP_BACKEND_BASE_URL + "/signup", data);
        console.log(signUpResponse);
        if (signUpResponse.status === 201) {
            console.log("sign up successful");
            console.log("email", data.email);
            sessionStorage.setItem("email", data.email);
            navigate('/survival');
        }
    };
    return (
        <section className="hero is-fullheight has-background-dark">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-one-third signUpContainer">
                            <div className="box has-background-translucent signUpContainer1">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className="title has-text-centered has-text-white">
                                        Sign Up
                                    </h1>
                                    <div className="field">
                                        <label className="label has-text-white">Name</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Your name"
                                                {...register("name", { required: true })}
                                            />
                                            {errors.name && (
                                                <span className="has-text-danger">
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-white">UserName</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Your username"
                                                {...register("user_name", { required: true })}
                                            />
                                            {errors.name && (
                                                <span className="has-text-danger">
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-white">Email</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="email"
                                                placeholder="Your email"
                                                {...register("email", { required: true })}
                                            />
                                            {errors.email && (
                                                <span className="has-text-danger">
                                                    This field is required and must be a valid email
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-white">Password</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="password"
                                                placeholder="Your password"
                                                {...register("password", { required: true })}
                                            />
                                            {errors.password && (
                                                <span className="has-text-danger">
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="control">
                                        <button className="button is-primary">Sign Up</button>
                                    </div>
                                    <div className="control has-text-white mt-4">
                                        Already have an account? <a className="signinlink" href="/signin">Login</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gradient-overlay"></div>
            <video src={"assets/bifrostVideo.mp4"} className="bifrostVideo is-hidden" muted></video>
        </section>
    );
};

export default SignUp;
