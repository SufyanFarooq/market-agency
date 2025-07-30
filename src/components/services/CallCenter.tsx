const CallCenter = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-6">📞</div>
      <h3 className="text-2xl font-bold text-text mb-4">Call Center</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Our Contact Center Services is a technology-enabled and skill-based contact center. We offer the services of confident, qualified, and experienced virtual assistants through our advanced call distribution system, modern machines and computers, real-time reporting system, regular fraud prevention checks, and the goal of maximizing resource utilization to ensure that trusted and comfortable assistance is provided.
      </p>
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
          <span className="text-gray-700">Advanced call distribution system</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
          <span className="text-gray-700">Real-time reporting system</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
          <span className="text-gray-700">Fraud prevention checks</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
          <span className="text-gray-700">Professional managed call agents</span>
        </div>
      </div>
    </div>
  );
};

export default CallCenter; 