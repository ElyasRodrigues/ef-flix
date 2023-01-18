import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <ToastContainer
        autoClose={1850}
        theme="dark"
      />
      <RoutesApp/>
    </>
  );
}

export default App;
