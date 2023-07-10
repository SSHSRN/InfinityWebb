import './SignIn.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    let signInResponse = await axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/login', data);
    console.log(signInResponse);
    if (signInResponse.status === 200) {
      console.log("sign up successful");
      console.log("email", data.email);
      sessionStorage.setItem("email", data.email);
      navigate('/main');
    }
  }
  return (
    <section className="hero is-fullheight has-background-dark">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-one-third signInContainer">
              <div className="box has-background-translucent signInContainer1">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h1 className="title has-text-centered">Login</h1>
                  <div className="field">
                    <label className="label has-text-white">Email</label>
                    <div className="control">
                      <input className="input" type="email" placeholder="Your email" {...register("email", { required: true })} />
                      {errors.email && <span>This field is required and must be a valid email</span>}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label has-text-white">Password</label>
                    <div className="control">
                      <input className="input" type="password" placeholder="Your password" {...register("password", { required: true })} />
                      {errors.password && <span>This field is required</span>}
                    </div>
                  </div>
                  <div className="control">
                    <button className="button is-primary">Login</button>
                  </div>
                  <div className="control has-text-white mt-4">
                    Don't have an account? <a href="/signup" className='signuplink'>Sign Up</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-overlay"></div>
      <video src={'assets/bifrostVideo.mp4'} className="bifrostVideo is-hidden" muted></video>
    </section>
  );
};

export default SignIn;
