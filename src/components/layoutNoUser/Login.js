import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import sprite from "../img/sprites.svg";
// import { useState } from "react";

export default function Login() {
  // const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
        defaultValues: {
          user: "",
        },
  });


  //Logic for onle one user at one session
  const onSubmit = (data) => {
    localStorage.setItem('user', data.user);
    // setUser(data.user);
    navigate('/');
  };

  // Logic for many users at one session
  // const onSubmit = (data) => {
  //   // Retrieve existing usernames from local storage or create an empty array if none exist
  //   const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  //   // Add the new username to the array
  //   existingUsers.push(data.user);

  //   // Save the updated array back to local storage
  //   localStorage.setItem('users', JSON.stringify(existingUsers));

  //   // Update the loggedInUser state with the current user
  //   setUserName(data.user);

  //   navigate('/');
  // };

    return (
      <div className='login_form'>
        <div className="login_header">JS Band Store / Liudmyla Starovoit</div>
        <div className="user_login">
          <svg><use href={sprite + "#user_square"} alt="user_logo"/></svg>
        </div>
        <form 
          className='form'
          onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="user">Username</label>
              <input
                type="text"
                id="user"
                name="user"
                className='login_user'
                placeholder='type Username'
                {...register("user", {
                  required: "User is required",
                  validate: {
                    maxLength: (v) =>
                      v.length <= 16 || "The username should have max 16 characters",
                    minLength: (v) =>
                      v.length >= 4 || "The username should have min 4 characters",
                    matchPattern: (v) =>
                      /^[a-zA-Z0-9]+$/.test(v) ||
                      "Username must be a valid, only letters and numbers",
                  },
                })}
              />

              {errors.user?.message && (
                <small>{errors.user.message}</small>
              )}

            <button 
              type="submit" 
              className='login_submit'
              disabled={!!errors.user}
            >
              Sign-In
            </button>
        </form>
      </div>
    );
}