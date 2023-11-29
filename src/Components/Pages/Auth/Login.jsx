import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { createUserWithGoogle, signIn } = useAuth();
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          role: "member",
        };

        axiosPublic
          .post("/users", userInfo)
          .then((res) => console.log(res.data));
        toast(`{Welcome }`);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("error", error));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const role2 = member;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast(`{Welcome }`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast("Email / Password doesn't match");
      });
  };
  return (
    <>
      <Helmet>
        <title>Alpha | Login</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/1zh3zd7/people-working-out-indoors-together-with-jump-rope.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 "></div>
        <div className="hero-content mt-24 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#f47520]">Login now!</h1>
            <p className="py-6 text-white font-semibold">
              Welcome back to our fitness hub! Sign in to access your
              personalized fitness journey. Your account is your gateway to an
              array of fitness classes, expert trainers, and a supportive
              community. Enter your email and password to continue your fitness
              endeavors with us. Forgot your password? No worries, we've got you
              covered. Join us in this fitness expedition and let's achieve your
              health goals together!
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="text-center mt-5">
              <button
                onClick={handleGoogleLogin}
                className="btn text-center text-xs font-semibold py-2 "
              >
                <span className="text-lg">
                  <FcGoogle />
                </span>{" "}
                Google
              </button>
            </div>
            <div className="divider w-1/2 mx-auto">OR</div>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                <small>
                  New Here?{" "}
                  <Link to="/signUp" className="hover:underline">
                    Create an account
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
