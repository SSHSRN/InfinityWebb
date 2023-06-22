import './SignUp.css'
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-one-third">
                            <div className="box">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className="title has-text-centered">Sign Up</h1>
                                    <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Your name" {...register("name", {required: true})} />
                                            {errors.name && <span>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input className="input" type="email" placeholder="Your email" {...register("email", {required: true})} />
                                            {errors.email && <span>This field is required and must be a valid email</span>}
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password</label>
                                        <div className="control">
                                            <input className="input" type="password" placeholder="Your password" {...register("password", {required: true})} />
                                            {errors.password && <span>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="control">
                                        <button className="button is-primary">Sign Up</button>
                                    </div>
                                    <div className="control">
                                        Already have an account? <a href="/signin">Login</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
