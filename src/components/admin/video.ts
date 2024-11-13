const videos = [
    {
        id: '1',
        title: 'Introduction to Our Platform',
        description: 'Learn the basics of using our platform effectively.',
        thumbnailUrl: 'https://images.pexels.com/photos/29361108/pexels-photo-29361108/free-photo-of-berlin-u-bahn-train-at-platform-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-15',
        views: 1234,
        duration: '5:30'
    },
    {
        id: '2',
        title: 'Advanced Features Tutorial',
        description: 'Deep dive into advanced platform features.',
        thumbnailUrl: 'https://images.pexels.com/photos/6844155/pexels-photo-6844155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-14',
        views: 856,
        duration: '8:45'
    },
    {
        id: '3',
        title: 'Using the Dashboard Effectively',
        description: 'Master your dashboard for better productivity.',
        thumbnailUrl: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-13',
        views: 304,
        duration: '6:22'
    },
    {
        id: '4',
        title: 'Exploring Platform Integrations',
        description: 'Learn how to connect with other tools.',
        thumbnailUrl: 'https://images.pexels.com/photos/4901993/pexels-photo-4901993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-12',
        views: 1507,
        duration: '9:10'
    },
    {
        id: '5',
        title: 'Customizing Your Profile',
        description: 'Tips for creating a unique profile on our platform.',
        thumbnailUrl: 'https://images.pexels.com/photos/8554619/pexels-photo-8554619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-11',
        views: 998,
        duration: '7:15'
    },
    {
        id: '6',
        title: 'User Management for Admins',
        description: 'Manage user permissions and roles.',
        thumbnailUrl: 'https://images.pexels.com/photos/837359/pexels-photo-837359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-10',
        views: 607,
        duration: '4:32'
    },
    {
        id: '7',
        title: 'Improving Your Analytics',
        description: 'Get insights from your analytics dashboard.',
        thumbnailUrl: 'https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-09',
        views: 1552,
        duration: '6:12'
    },
    {
        id: '8',
        title: 'Automating Tasks on Our Platform',
        description: 'Reduce manual work with automation features.',
        thumbnailUrl: 'https://images.pexels.com/photos/5981782/pexels-photo-5981782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-08',
        views: 1229,
        duration: '5:45'
    },
    {
        id: '9',
        title: 'Team Collaboration Tools',
        description: 'Features to enhance team productivity.',
        thumbnailUrl: 'https://images.pexels.com/photos/7868893/pexels-photo-7868893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-07',
        views: 1945,
        duration: '7:25'
    },
    {
        id: '10',
        title: 'Navigating the Mobile App',
        description: 'Learn to use our platform on mobile devices.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1515376721779-7db6951da88d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODg5NDV8MHwxfGFsbHwxMHx8fHx8fHwxNjc2MTAyODM4&ixlib=rb-4.0.3&q=80&w=400',
        uploadDate: '2024-03-06',
        views: 250,
        duration: '4:50'
    },
    {
        id: '11',
        title: 'Content Creation Best Practices',
        description: 'Optimize your content for maximum engagement.',
        thumbnailUrl: 'https://images.pexels.com/photos/7525183/pexels-photo-7525183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-05',
        views: 318,
        duration: '8:10'
    },
    {
        id: '12',
        title: 'Understanding User Behavior Analytics',
        description: 'Track user interactions on your platform.',
        thumbnailUrl: 'https://images.pexels.com/photos/8550836/pexels-photo-8550836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-04',
        views: 768,
        duration: '5:35'
    },
    {
        id: '13',
        title: 'Live Streaming Features',
        description: 'Learn how to broadcast live events.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODg5NDV8MHwxfGFsbHwxM3x8fHx8fHwxNjc2MTAyODcy&ixlib=rb-4.0.3&q=80&w=400',
        uploadDate: '2024-03-03',
        views: 1045,
        duration: '11:42'
    },
    {
        id: '14',
        title: 'Security and Privacy Settings',
        description: 'Protect your data with advanced settings.',
        thumbnailUrl: 'https://images.pexels.com/photos/13061475/pexels-photo-13061475.jpeg?auto=compress&cs=tinysrgb&w=800',
        uploadDate: '2024-03-02',
        views: 1270,
        duration: '6:50'
    },
    {
        id: '15',
        title: 'Managing Your Notifications',
        description: 'Control alerts and updates from our platform.',
        thumbnailUrl: 'https://images.pexels.com/photos/7887852/pexels-photo-7887852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-03-01',
        views: 319,
        duration: '3:30'
    },
    {
        id: '16',
        title: 'How to Archive Content',
        description: 'Save and manage old content effectively.',
        thumbnailUrl: 'https://images.pexels.com/photos/8371125/pexels-photo-8371125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-02-28',
        views: 592,
        duration: '4:10'
    },
    {
        id: '17',
        title: 'Onboarding New Team Members',
        description: 'Get new users up to speed quickly.',
        thumbnailUrl: 'https://images.pexels.com/photos/8278902/pexels-photo-8278902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        uploadDate: '2024-02-27',
        views: 482,
        duration: '5:45'
    },
    {
        id: '18',
        title: 'Platform Update Overview',
        description: 'Learn about the latest changes and features.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODg5NDV8MHwxfGFsbHwxOHx8fHx8fHwxNjc2MTAyOTM0&ixlib=rb-4.0.3&q=80&w=400',
        uploadDate: '2024-02-26',
        views: 1123,
        duration: '7:50'
    },
    {
        id: '19',
        title: 'Troubleshooting Common Issues',
        description: 'Solutions to common platform problems.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODg5NDV8MHwxfGFsbHwxOXx8fHx8fHwxNjc2MTAyOTQz&ixlib=rb-4.0.3&q=80&w=400',
        uploadDate: '2024-02-25',
        views: 893,
        duration: '6:05'
    },
    {
        id: '20',
        title: 'Productivity Hacks',
        description: 'Maximize efficiency with our tips and tricks.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODg5NDV8MHwxfGFsbHwyMHx8fHx8fHwxNjc2MTAyOTUx&ixlib=rb-4.0.3&q=80&w=400',
        uploadDate: '2024-02-24',
        views: 2147,
        duration: '9:05'
    }
];

export default videos;