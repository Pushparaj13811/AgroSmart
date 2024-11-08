import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { About, AdminDashboard, Blog, BlogPost, DiseaseDetection, Features, ForgotPassword, Home, Login, Register, VideoLibrary, } from "./pages"


function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;