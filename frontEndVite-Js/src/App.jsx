import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import Layout from "./components/layout";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
