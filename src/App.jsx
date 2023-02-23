import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './pages/Error';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from "./pages/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/error/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path={'/home/blog'} element={<Blog />} />
          <Route path={'/home/about'} element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
