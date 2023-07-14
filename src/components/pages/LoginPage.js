import { useEffect } from "react";
import Login from "../layout/Login";

function LoginPage () {

  useEffect( () => {
    document.title = 'Login';
  }, []);

  return (
    <Login />
  )
}

export default LoginPage;