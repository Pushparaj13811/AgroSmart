import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './store/store';
import ProtectedRoute from './services/protectedRoutes';
import { AnimatePresence } from 'framer-motion';
import VideoPage from './pages/video/VideoPage';
import HistoryPage from './pages/HistoryPage';
import HistoryDetailPage from './pages/HistoryDetailPage';

// Lazy load components individually from pages/index.ts
const About = lazy(() => import('./pages').then(module => ({ default: module.About })));
const AdminDashboard = lazy(() => import('./pages').then(module => ({ default: module.AdminDashboard })));
const Blog = lazy(() => import('./pages').then(module => ({ default: module.Blog })));
const BlogPost = lazy(() => import('./pages').then(module => ({ default: module.BlogPost })));
const DiseaseDetection = lazy(() => import('./pages').then(module => ({ default: module.DiseaseDetection })));
const Features = lazy(() => import('./pages').then(module => ({ default: module.Features })));
const ForgotPassword = lazy(() => import('./pages').then(module => ({ default: module.ForgotPassword })));
const Home = lazy(() => import('./pages').then(module => ({ default: module.Home })));
const Login = lazy(() => import('./pages').then(module => ({ default: module.Login })));
const Register = lazy(() => import('./pages').then(module => ({ default: module.Register })));
const VideoLibrary = lazy(() => import('./pages').then(module => ({ default: module.VideoLibrary })));
const ProfileUpdateForm = lazy(() => import('./pages').then(module => ({ default: module.ProfileUpdateForm })));
const ProfilePage = lazy(() => import('./pages').then(module => ({ default: module.ProfilePage })))
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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes location={location} key={location.pathname}>
              {/* If user is logged in, render UserProfile, else render Home */}
              <Route path="/" element={user !== null ? <ProfilePage /> : <Home />} />

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
              <Route path="/history" element={
                <ProtectedRoute>
                  <HistoryPage />
                </ProtectedRoute>
              } />

              <Route path="/history/:id" element={
                <ProtectedRoute>
                  <HistoryDetailPage />
                </ProtectedRoute>
              } />

              {/* Blog */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />

              {/* Videos */}
              <Route path="/videos" element={<VideoLibrary />} />
              <Route path="/videos/:id" element={<VideoPage publicId={location.pathname.split('/').pop() || ''} />} />

              {/* Auth routes */}

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
          </Suspense>
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
