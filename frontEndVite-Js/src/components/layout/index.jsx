import { Outlet } from "react-router";
import MyHeader from "../myHeader";

export default function Layout() {
  return (
    <>
      <MyHeader />
      <Outlet />
    </>
  );
}
