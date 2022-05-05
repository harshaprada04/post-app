import { Route, Routes } from "react-router";
import Homepage from "../components/Homepage";
import PostRawJson from "../components/PostRawJson";

function Routing(): any {
  return (
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/json" element={<PostRawJson />}></Route>
      </Routes>
  );
}

export default Routing;
