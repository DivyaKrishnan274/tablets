import React from 'react';
import Header from '../components/Header';

const Meditation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Meditation</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                A regular daily routine of meditation helps in uplifting our general well-being, improving our health, 
                relieving stress, and experiencing a deeper connectedness with the universal consciousness. Live a happier, 
                healthier, and fulfilling life with inner peace and harmony. Attend regular guided Ana-pana-sati meditation 
                sessions offered online by Spiritual Tablets, followed by knowledge session. These sessions are being 
                conducted at different time zones and no prior registration is necessary. Details for joining the session 
                are given below.
              </p>
            </div>

            {/* Meditation Sessions */}
            <div className="space-y-8">
              {/* Dhyana Nepal */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">
                  Dhyana Nepal – Daily Meditation (Hindi)
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">⏰</span>
                    <span className="text-gray-700">
                      <strong>Timings:</strong> 4.30 PM – 5.30 PM IST / 7.00 AM – 8 AM EST / 4.45 PM – 5.45 PM Nepal
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">🔗</span>
                    <span className="text-gray-700">
                      <strong>Zoom:</strong> ID – 3824868932 / Pwd – dhyan
                    </span>
                  </div>
                </div>
              </div>

              {/* Daily Meditation by Andaman */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">
                  Daily Meditation by Andaman PSSM Team (Hindi)
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">⏰</span>
                    <span className="text-gray-700">5.30 AM – 6.30 AM IST</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">🔗</span>
                    <span className="text-gray-700">
                      <strong>Zoom:</strong> Id – 84609335415 / Pwd – 1234
                    </span>
                  </div>
                </div>
              </div>

              {/* Oneness Meditation Qatar */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">
                  Oneness Meditation Qatar
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">📅</span>
                    <span className="text-gray-700">
                      <strong>Every Tuesday:</strong> 4:00 PM to 5:00 PM Qatar / 6:30 PM to 7:30 PM IST
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">📅</span>
                    <span className="text-gray-700">
                      <strong>Every Friday:</strong> 5:00 PM to 6:00 PM Qatar / 7:30 PM to 8:30 PM IST
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">🔗</span>
                    <span className="text-gray-700">
                      <strong>Zoom:</strong> ID – 84370714392 / Pwd – bliss
                    </span>
                  </div>
                </div>
              </div>

              {/* Oneness Meditation Australia */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">
                  Oneness Meditation Australia – PYRAMID DHEEKSHA
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">⏰</span>
                    <span className="text-gray-700">9 PM – 10 PM AEST / 3.30 PM – 4.30 PM IST</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">🔗</span>
                    <span className="text-gray-700">
                      <strong>Zoom:</strong> ID – 86798091637 / Pwd – 1234
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">📧</span>
                    <span className="text-gray-700">
                      <strong>Contact:</strong> pmconenessaustralia@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">▶️</span>
                    <span className="text-gray-700">
                      <strong>YouTube:</strong> Oneness Meditation Australia
                    </span>
                  </div>
                </div>
              </div>

              {/* EkthaDhyan */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">
                  EkthaDhyan – Daily Group Meditation and Wisdom (Telugu)
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">⏰</span>
                    <span className="text-gray-700">5:00AM – 6:00AM IST</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">⏰</span>
                    <span className="text-gray-700">9.30 – 11:00 PM IST</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-600">🔗</span>
                    <span className="text-gray-700">
                      <strong>Zoom:</strong> ID – 6998042869 / Pwd – sptab
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Peaceful meditation scene with water surrounded by trees"
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Find Your Inner Peace
                </h4>
                <p className="text-gray-600">
                  Join our meditation sessions and connect with like-minded individuals 
                  on a journey toward spiritual awakening and inner harmony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Meditation;
