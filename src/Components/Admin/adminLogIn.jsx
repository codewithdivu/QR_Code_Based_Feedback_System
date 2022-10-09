import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { userAuthContext } from "../../Contexts/UserAuthContext";

const AdminLogIn = () => {
  const [isLogging, setIsLogging] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logIn } = useContext(userAuthContext);
  const navigate = useNavigate();

  const onLogin = async ({ email, password }) => {
    setIsLogging(true);
    console.log("email,password :>> ", email, password);
    await logIn(email, password);
    setIsLogging(false);
    navigate("/admin");
  };
  return (
    <>
      <div class="container-wrap">
        <div class="container">
          <div class="login_container">
            <div class="logos">
              <img src="/images/logo.png" alt="police_logo" />
            </div>
            <div class="heading">
              <p>Admin LogIn</p>
              <hr class="hr" />
              <div class="details">
                <p>
                  Hey , Enter your credentials to get sign in to your account
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onLogin)}>
              <div class="input_field">
                <input
                  type="email"
                  placeholder="Enter Admin Email"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className={errors?.email?.message ? "error-outline" : ""}
                />
                {errors?.email?.message && (
                  <p className="error-message">{errors?.email?.message}</p>
                )}
              </div>
              <div class="input_field">
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  id=""
                  name="password"
                  placeholder="Password"
                  className={errors?.password?.message ? "error-outline" : ""}
                />
                {errors?.password?.message && (
                  <p className="error-message">{errors?.password?.message}</p>
                )}
              </div>
              <div class="login_details">
                <a href="./faq.html">Having trouble in sign in ?</a>
              </div>
              <div class="signIn_btn">
                <button class="login_btn" type="submit" disabled={isLogging}>
                  {isLogging ? "Fasten your seat belt..." : "Sign In"}
                </button>
              </div>
            </form>

            <hr class="lastline" />
            <div class="signUp_details">
              <span> Don't have an account? &nbsp;</span>
              <a href="./signup.html">Request Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogIn;
