function VideoDetails({ category, title, description }: { category: string, title: string, description: string }) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-green-600 font-medium">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    );
  }
  
  export default VideoDetails;
  