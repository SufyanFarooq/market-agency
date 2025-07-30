import React from 'react';

const DeliveryCard = () => {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-xl">
        {/* Circular Overlay with Checkmark */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Scooter Icon */}
        <div className="mt-12 mb-6 flex justify-center">
          <div className="relative">
            {/* Scooter */}
            <svg className="w-20 h-20 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            {/* Person on scooter */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text mb-2">
            Delivery Excellence
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Fast, secure, and reliable delivery across UAE
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default DeliveryCard;