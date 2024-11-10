import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { About, AdminDashboard, Blog, BlogPost, DiseaseDetection, Features, ForgotPassword, Home, Login, Register, UserProfile, VideoLibrary } from "./pages";
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './store/store';
import ProtectedRoute from './services/protectedRoutes';
import ProfileUpdateForm from './pages/user/ProfileUpdateForm';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { user } = useSelector((state: RootState) => state.user);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.split('/')[1] || "Home";
    document.title = `AgroSmart - ${pathName.charAt(0).toUpperCase() + pathName.slice(1)}`;
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            {/* If user is logged in, render UserProfile, else render Home */}
            <Route path="/" element={user !== null ? <UserProfile /> : <Home />} />

            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />

            {/* Protected routes */}
            <Route path="/detect" element={
              <ProtectedRoute>
                <DiseaseDetection />
              </ProtectedRoute>
            } />
            <Route path="/update-profile" element={
              <ProtectedRoute>
                <ProfileUpdateForm />
              </ProtectedRoute>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/videos" element={<VideoLibrary />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protect Admin Dashboard route */}
            <Route path="/admin/*" element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </AnimatePresence>
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
