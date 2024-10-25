import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import PostUse from "./components/PostUse";
import GetAllUser from "./components/GetAllUser";



export default function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<Home/>} />
        <Route path="post" element={<PostUse/>} />
        <Route path="get" element={<GetAllUser/>} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
