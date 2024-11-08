const DashboardOverview = () => (
    <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "Total Users", value: "1,234", change: "+12%" },
                { title: "Disease Detections", value: "5,678", change: "+8%" },
                { title: "Blog Posts", value: "89", change: "+15%" },
                { title: "Video Tutorials", value: "45", change: "+5%" }
            ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                    <div className="mt-2 flex items-baseline">
                        <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                        <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default DashboardOverview;