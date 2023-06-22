import './SignIn.css';
import { useForm } from "react-hook-form";

const SignIn = () => {
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
                  <h1 className="title has-text-centered">Login</h1>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input className="input" type="email" placeholder="Your email" {...register("email", {required: true})} />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input className="input" type="password" placeholder="Your password" {...register("password", {required: true})} />
                    </div>
                  </div>
                  <div className="control">
                    <button className="button is-primary">Login</button>
                  </div>
                  <div className="control">
                    Don't have an account? <a href="/signup">Sign Up</a>
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

export default SignIn;
