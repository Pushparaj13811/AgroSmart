import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { About, AdminDashboard, Blog, BlogPost, DiseaseDetection, Features, ForgotPassword, Home, Login, Register, VideoLibrary, } from "./pages"
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname.replace("/", "") || "Home"; // Default to "Home" if root
    document.title = `AgroSmart - ${pathName.charAt(0).toUpperCase() + pathName.slice(1)}`;
  }, [location]);

  return (

    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/detect" element={<DiseaseDetection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/videos" element={<VideoLibrary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* <Route path="/profile" element={<UserProfile />} /> */}
          <Route path="/admin/*" element={<AdminDashboard />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);