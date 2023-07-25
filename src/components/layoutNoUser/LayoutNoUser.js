import { Outlet } from "react-router-dom";

function LayoutNoUser () {

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default LayoutNoUser;