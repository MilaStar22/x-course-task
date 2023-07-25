import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import sprite from "../img/sprites.svg";

export default function Login() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
        defaultValues: {
          user: "",
        },
    });
    
    return (
      <div className='login_form'>
        <div className="login_header">JS Band Store / Liudmyla Starovoit</div>
        <div className="user_login">
          <svg><use href={sprite + "#user_square"} alt="user_logo"/></svg>
        </div>
        <form 
          className='form'
          onSubmit={handleSubmit((d) => console.log(d))}>
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
                      /^[a-zA-Z0-9]$/.test(v) ||
                      "Username must be a valid, only letters and numbers",
                  },
                })}
              />

              {errors.user?.message && (
                <small>{errors.user.message}</small>
              )}

            <Link to='/' className='login_submit'>
              <input 
                type="submit" 
                value="Sign-In"
              />
            </Link>
        </form>
      </div>
    );
}