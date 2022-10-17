import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../views/Home";
import Results from "../views/Results";
import FourOFour from "../views/404";

const RoutesComponent = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:title" element={<Results />} />
        <Route path="*" element={<FourOFour />} />
    </Routes>
    </BrowserRouter>
);

  export default RoutesComponent;