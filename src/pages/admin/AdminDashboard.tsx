import { lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BarChart2, FileText, Video, Users, Settings } from 'lucide-react';



const BlogManagement = lazy(() => import('../../components/admin/BlogManagement').then(module => ({ default: module.default })));
const VideoManagement = lazy(() => import('../../components/admin/VideoManagement').then(module => ({ default: module.default })));
const DashboardOverview = lazy(() => import('../../components/admin/DashboardOverview').then(module => ({ default: module.default })));
const Setting = lazy(() => import('../../components/admin/Setting').then(module => ({ default: module.default })));
const CreateBlog = lazy(() => import('../../components/admin/CreateBlog').then(module => ({ default: module.default })));
const VideoUploadPage = lazy(() => import('./VideoUploadPage').then(module => ({ default: module.default })));


const AdminDashboard = () => {
  return (
      <div className="min-h-screen z-0 bg-gray-100">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white top-16 sticky shadow-md h-screen">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
            </div>
            <nav className="mt-4">
              <Link
                to="/admin"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                <BarChart2 className="h-5 w-5 mr-3" />
                Dashboard
              </Link>
              <Link
                to="/admin/blog"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                <FileText className="h-5 w-5 mr-3" />
                Blog Posts
              </Link>
              <Link
                to="/admin/videos"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                <Video className="h-5 w-5 mr-3" />
                Videos
              </Link>
              <Link
                to="/admin/users"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                <Users className="h-5 w-5 mr-3" />
                Users
              </Link>
              <Link
                to="/admin/settings"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/blog" element={<BlogManagement />} />
              <Route path="/videos" element={<VideoManagement />} />
              <Route path="/upload-video" element={<VideoUploadPage />} />
              <Route path="/create-blog" element={<CreateBlog onSave={() => {
                // Handle save logic here
                console.log('Blog saved');
              }} />} />
              <Route path="/settings" element={<Setting />} />
            </Routes>
          </main>
        </div>
      </div>
  );
};

export default AdminDashboard;