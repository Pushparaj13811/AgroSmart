const videos = [
    {
        id: "1",
        title: "Drip Irrigation: Efficient Water Management",
        description: "Drip irrigation is a highly efficient method of watering plants that minimizes water waste and ensures that water goes directly to the plant's root system. In this video, we will dive deep into the principles of drip irrigation, how it can save water, and why it’s a great option for farmers looking to maximize crop yield with minimal water usage. We will cover the various components of a drip irrigation system, such as emitters, filters, and pipes, and how to install and maintain them for optimal performance. Whether you're new to irrigation or looking to upgrade your current system, this video will guide you through the process.",
        thumbnail: "https://images.pexels.com/photos/27624218/pexels-photo-27624218/free-photo-of-desert-irrigation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        avatar: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80",
        channelName: "AgroSmart",
        uploadedTime: "1 year ago",
        views: "1.2M views",
        videoUrl: "https://res.cloudinary.com/df6s12fmg/video/upload/v1731477877/Drip_Irrigation_System___How_It_Works___Layout_Animation_sbepyd.mp4",
        duration: "10:30",
        subscribers: "10.2K subscribers",
        likes: 128,
        category: "Water Management"
    },
    {
        id: "2",
        title: "Vertical Farming: The Future of Agriculture",
        description: "Vertical farming is transforming the way we think about growing food. By using vertical space, instead of spreading crops across large horizontal areas, this method allows urban areas to produce food efficiently without the need for large plots of land. In this video, we’ll explore how vertical farming works, the technologies involved, and its many benefits, including space-saving, reduced environmental impact, and year-round production. From hydroponics to aeroponics, we’ll also look at the various growing techniques used in vertical farms. This video is perfect for anyone interested in sustainable agriculture, urban farming, or innovative farming techniques that could shape the future of food production.",
        thumbnail: "https://as1.ftcdn.net/v2/jpg/05/65/23/24/1000_F_565232498_8l6Uc7MmMo5BSsORruAzFwjhphUHo1ui.jpg",
        avatar: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80",
        channelName: "AgroSmart",
        uploadedTime: "6 months ago",
        views: "750K views",
        videoUrl: "https://res.cloudinary.com/df6s12fmg/video/upload/v1731477659/CAN-Agri_Vertical_Farming._Amazing_Modern_Farming_Technology_qlhnk1.mp4",
        duration: "14:15",
        category: "Sustainable Farming"
    },
    {
        id: "3",
        title: "Tainu Khabar Nahi - Arijit Singh | Munjya | Sharvari, Abhay Verma| Sachin-Jigar, Amitabh Bhattacharya",
        description: "The song 'Tainu Khabar Nahi' from the movie *Munjya* is a soulful, romantic track by the versatile Arijit Singh. In this music video, we see a beautiful blend of emotional lyrics, gripping performances, and an entrancing melody that leaves an imprint on the listener’s heart. The song was composed by Sachin-Jigar with lyrics by Amitabh Bhattacharya. Watch the music video and dive into the captivating world of Munjya, where music and emotion intertwine. Arijit Singh’s voice brings life to the track, expressing love, longing, and heartfelt emotion. This video is a must-watch for fans of soulful music and powerful storytelling.",
        thumbnail: "https://i.ytimg.com/vi/N6u7EO8mX9U/sddefault.jpg",
        avatar: "https://i.ytimg.com/vi/nE_2Mxustts/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAuGsdkrhvTkmhsQhEpNCkEnVr8mQ",
        channelName: "Munjya Music",
        uploadedTime: "2 months ago",
        views: "5.8M views",
        videoUrl: "https://res.cloudinary.com/df6s12fmg/video/upload/v1731474093/vyfhntdw1hzy8s9y8yuw.mp4",
        duration: "03:45",
        category: "Music"
    },
    {
        id: "4",
        title: "Hydroponics: Growing Without Soil",
        description: "Hydroponics is a method of growing plants without soil, using mineral nutrient solutions in water. This innovative technique allows for faster growth, increased yield, and the ability to grow in locations where traditional soil-based farming is not feasible. In this video, we explore how hydroponics works, the different types of hydroponic systems, and the benefits of this soil-less farming method. Whether you're interested in home gardening or commercial farming, this video provides valuable insights into hydroponic farming and its potential to revolutionize agriculture.",
        thumbnail: "https://images.pexels.com/photos/1035664/pexels-photo-1035664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        avatar: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80",
        channelName: "AgroSmart",
        uploadedTime: "3 months ago",
        views: "500K views",
        videoUrl: "https://res.cloudinary.com/df6s12fmg/video/upload/v1731476458/Hydroponics__The_Complete_Beginner_s_Guide_to_Hydroponic_Gardening_vxdm5y.mp4",
        duration: "12:00",
        category: "Sustainable Farming"
    },
    {
        id: "5",
        title: "The Power of Organic Farming",
        description: "Organic farming focuses on using natural methods to grow crops without synthetic fertilizers or pesticides. This approach is better for the environment, healthier for consumers, and more sustainable in the long run. In this video, we will take a closer look at organic farming practices, from soil health to crop rotation, and explain why this method is gaining popularity among farmers and consumers alike. Join us as we explore the benefits and challenges of organic farming and learn why it's considered one of the most sustainable farming methods in the world.",
        thumbnail: "https://images.pexels.com/photos/1130631/pexels-photo-1130631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        avatar: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80",
        channelName: "AgroSmart",
        uploadedTime: "1 year ago",
        views: "1M views",
        videoUrl: "https://res.cloudinary.com/df6s12fmg/video/upload/v1731474092/Organic_Farming_in_India__What_is_Organic_Farming___Benefits_and_Problems_dur7zm.mp4",
        duration: "15:30",
        category: "Organic Farming"
    },
    {
        id: "6",
        title: "Sustainable Agriculture Practices",
        description: "Sustainable agriculture aims to produce food in a way that maintains the health of the environment, economy, and society. This video will showcase sustainable practices such as crop rotation, agroforestry, and soil conservation techniques that help maintain ecological balance while increasing farm productivity. We’ll also discuss the importance of water conservation, biodiversity, and integrated pest management in sustainable farming. Whether you’re an aspiring farmer or an environmental enthusiast, this video is a great way to learn more about sustainable farming techniques and their impact on the future of agriculture.",
        thumbnail: "https://images.pexels.com/photos/27024356/pexels-photo-27024356/free-photo-of-photo-of-cattle-on-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        avatar: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80",
        channelName: "AgroSmart",
        uploadedTime: "4 months ago",
        views: "300K views",
        videoUrl: "https://res.cloudinary.com/df6s12fmg/video/upload/v1731476478/Sustainable_Agriculture_Practices__Water_Conservation___Crop_Rotation_xaswrq.mp4",
        duration: "11:45",
        category: "Sustainable Farming"
    },
    {
        id: "7",
        title: "Modern Technology in Agriculture",
        description: "The world of agriculture is changing rapidly thanks to new technologies such as drones, sensors, and machine learning. These innovations are helping farmers make better decisions, increase crop yields, and reduce environmental impact. In this video, we will take a closer look at the latest technologies used in agriculture and how they’re transforming the industry. From precision farming to automated harvesting, these technological advancements are revolutionizing the way food is produced. Learn how technology is shaping the future of farming and how you can be part of this exciting change.",
        thumbnail: "https://images.pexels.com/photos/1070985/pexels-photo-1070985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        avatar: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80",
        channelName: "AgroSmart",
        uploadedTime: "5 months ago",
        views: "400K views",
        videoUrl: "https://res.cloudinary.com/df6s12fmg/video/upload/v1731477012/Modern_Technology_in_Agriculture__Innovations_in_Farming__gksq3f.mp4",
        duration: "10:00",
        category: "Technology in Farming"
    },
    {
        id: "8",
        title: "The Benefits of Aquaponics Farming",
        description: "Aquaponics is a revolutionary farming technique that combines aquaculture (raising fish) with hydroponics (growing plants in water). This integrated system creates a sustainable, closed-loop environment where fish waste provides nutrients for plants, and plants help filter the water for fish. In this video, we’ll explore how aquaponics works, the benefits of this system, and how it can help create a more sustainable and efficient food production system. Learn how aquaponics is changing the future of farming and how it can be applied in both small-scale and commercial settings.",
        thumbnail: "https://images.pexels.com/photos/1180870/pexels-photo-1180870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        avatar: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80",
        channelName: "AgroSmart",
        uploadedTime: "7 months ago",
        views: "200K views",
        videoUrl: "https://res.cloudinary.com/df6s12fmg/video/upload/v1731477091/Aquaponics_Farming__Complete_Guide_to_Aquaponics_Farming_yas7uo.mp4",
        duration: "16:30",
        category: "Sustainable Farming"
    },
    {
        id: "9",
        title: "Soil Health Management",
        description: "Soil health is a critical aspect of farming. Healthy soil supports plant growth, water retention, and nutrient cycling, which are all essential for sustainable agriculture. In this video, we’ll discuss how to manage soil health using techniques such as organic matter addition, crop rotation, and reduced tillage. We’ll also highlight the importance of soil testing and understanding soil types. This video is a great resource for farmers looking to improve the quality of their soil and increase crop productivity through better soil management.",
        thumbnail: "https://images.pexels.com/photos/1449075/pexels-photo-1449075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        avatar: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80",
        channelName: "AgroSmart",
        uploadedTime: "8 months ago",
        views: "150K views",
        videoUrl: "https://res.cloudinary.com/df6s12fmg/video/upload/v1731477114/Soil_Health_Management_in_Agriculture__Benefits_and_Techniques_ii8rmm.mp4",
        duration: "12:20",
        category: "Soil Management"
    },
    {
        id: "10",
        title: "Introduction to Agroforestry",
        description: "Agroforestry is the practice of integrating trees and shrubs into agricultural landscapes. This approach provides multiple benefits such as improving soil health, enhancing biodiversity, and increasing farm profitability. In this video, we’ll explain the different types of agroforestry systems, their benefits, and how they contribute to sustainable land use practices. If you’re interested in learning more about agroforestry and how it can improve farm sustainability and productivity, this video is a must-watch.",
        thumbnail: "https://images.pexels.com/photos/28866468/pexels-photo-28866468/free-photo-of-scenic-pathway-through-glencoe-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        avatar: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80",
        channelName: "AgroSmart",
        uploadedTime: "9 months ago",
        views: "250K views",
        videoUrl: "https://res.cloudinary.com/df6s12fmg/video/upload/v1731477014/Agroforestry__Benefits_and_Practices_lkj5vb.mp4",
        duration: "13:30",
        category: "Agroforestry"
    }
];

export default videos;
