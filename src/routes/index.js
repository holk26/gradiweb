import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../views/Home";
import FourOFour from "../views/404";

const RoutesComponent = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/gradiweb" element={<Home />} />
        <Route path="*" element={<FourOFour />} />
    </Routes>
    </BrowserRouter>
);

  export default RoutesComponent;