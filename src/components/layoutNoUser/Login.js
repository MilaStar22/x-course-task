import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { BiSolidUser } from "react-icons/bi";

export default function Login() {
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
    sessionStorage.setItem('user', data.user);
    navigate('/');
  };

  // Logic for many users at one session
  // const onSubmit = (data) => {
  //   const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  //   existingUsers.push(data.user);
  //   localStorage.setItem('users', JSON.stringify(existingUsers));
  //   setUserName(data.user);
  //   navigate('/');
  // };

    return (
      <div className='login_form'>
        <div className="login_header">JS Band Store / Liudmyla Starovoit</div>
        <div className="user_login">
          <BiSolidUser className="user_logo" alt='user_img'/>
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