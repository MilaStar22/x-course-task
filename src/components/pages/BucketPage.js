import { useEffect } from "react";
import Bucket from "../layout/Bucket";

function BucketPage () {

  useEffect( () => {
    document.title = 'Bucket';
  }, []);

  return (
    <Bucket />
  )
}

export default BucketPage;