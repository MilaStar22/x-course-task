import { useEffect } from "react";
import Purchase from "../layout/Purchase";

function PurchasePage () {

  useEffect( () => {
    document.title = 'Purchase';
  }, []);

  return (
    <Purchase />
  )
}

export default PurchasePage;