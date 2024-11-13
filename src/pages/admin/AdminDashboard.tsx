import { Routes, Route, Link } from 'react-router-dom';
import { BarChart2, FileText, Video, Users, Settings } from 'lucide-react';
import DashboardOverview from '../../components/admin/DashboardOverview';
import BlogManagement from '../../components/admin/BlogManagement';
import VideoManagement from '../../components/admin/VideoManagement';
import Setting from '../../components/admin/Setting';
import CreateBlog from '../../components/admin/CreateBlog';
import VideoUpload from '../../components/admin/VideoUpload';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md min-h-screen">
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
            <Route path="/videos" element={<VideoManagement />}>
              <Route path="/upload-video" element={<VideoUpload />} />
            </Route>
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