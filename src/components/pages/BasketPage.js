import { useEffect } from "react";
import Basket from "../layout/Basket";

function BasketPage () {

  useEffect( () => {
    document.title = 'Basket';
  }, []);

  return (
    <Basket />
  )
}

export default BasketPage;