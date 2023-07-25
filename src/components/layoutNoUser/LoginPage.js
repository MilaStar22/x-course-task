import { useEffect } from "react";
import Login from "./Login";

function LoginPage () {

  useEffect( () => {
    document.title = 'JS Band Store';
  }, []);

  return (
    <Login />
  )
}

export default LoginPage;