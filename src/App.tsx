import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DiseaseDetection from './pages/DiseaseDetection';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import VideoLibrary from './pages/VideoLibrary';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
// import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/admin/AdminDashboard';
import Features from './pages/Features';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detect" element={<DiseaseDetection />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/videos" element={<VideoLibrary />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* <Route path="/profile" element={<UserProfile />} /> */}
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;