import { Outlet } from "react-router";
import MyHeader from "../myHeader";
import Container from "../container";

export default function Layout() {
  return (
    <>
      <MyHeader />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
