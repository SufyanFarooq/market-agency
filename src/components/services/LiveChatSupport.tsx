import Image from 'next/image';

const LiveChatSupport = () => {
  return (
    <div className="group relative bg-gradient-to-br from-pink-50 via-white to-pink-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-200/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23EC4899' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 p-6">
        {/* Header with Image */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300 group-hover:scale-110">
              <div className="text-white text-2xl">💬</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">Live Chat Support</h3>
          </div>
          
          {/* Image */}
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Image 
              src="/assets/services/live-chat-support.jpg" 
              alt="Live Chat Support"
              width={80}
              height={80}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
          Patience and flexibility are two necessary characteristics. Every consumer contacts your customer service department for a variety of reasons and in a variety of moods. Handling joyful, furious, puzzled, irritated, and curious customers calmly and politely required patience and the ability to adapt to changing circumstances. Every circumstance is handled by our intelligent customer service representatives in a way that pleases customers.
        </p>

        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></div>
            <span className="text-gray-700 text-sm">Real-time customer communication</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></div>
            <span className="text-gray-700 text-sm">Immediate issue resolution</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></div>
            <span className="text-gray-700 text-sm">Intelligent customer service representatives</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></div>
            <span className="text-gray-700 text-sm">24/7 availability</span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-300/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LiveChatSupport; 