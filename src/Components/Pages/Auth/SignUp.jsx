import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { createUser, updateUserProfile, createUserWithGoogle,  } = useAuth();

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
        navigate(from, { replace: true });
        toast(`{Welcome }`);
      })
      .catch((error) => console.log("error", error));
  };
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, res.data.data.display_url)
          .then(() => {
            console.log("Updated");
            const userInfo = {
              name: data.name,
              email: data.email,
              role : "member",
              profilePic : res.data.data.display_url
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to the database");
                reset();
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "User has been created",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => console.error(error));
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Alpha | Registration</title>
      </Helmet>
      <div
        className="hero min-h-screen  bg-base-200"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/5BD6B4M/athlete-focused-tire-flipping.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 "></div>
        <div className="hero-content mt-10 lg:p-20 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Sign-Up now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?=.*[0-9])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Password must be 6 character.
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Password must be in between 20 character.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Password requires at least one uppercase letter, one
                    lowercase letter, one number, one special character.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  {...register("image")}
                  required
                  type="file"
                  className="file-input w-full max-w-xs"
                />
                {errors.photo && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Photo URL field is required
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign-Up"
                />
            
              </div>
              <div className="text-center">
                <div className="ml-12  w-2/3 divider">OR</div>
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
              </div>
              <p className="mt-8">
                <small>
                  Already Have An Account?{" "}
                  <Link to="/login" className="hover:underline">
                    Please Login.
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

export default SignUp;
