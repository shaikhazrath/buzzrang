import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Apple,
  PlayCircle,
  Menu,
  Search,
  ShoppingBag,
  Heart,
  Camera,
  Play,
  CheckCircle,
  Star,
  Layout,
  JoystickIcon,
  ListCollapse
} from 'lucide-react';
import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('66ee22b6001551106b0e');

const databases = new Databases(client);

const LandingPage = () => {
  const [isPersonalizationOn, setIsPersonalizationOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
  
    try {
      const response = await databases.createDocument(
        '66ee23020026a3a58523', // Replace with your database ID
        '66ee2313000dcfa4e233', // Replace with your collection ID
        'unique()', 
        formData // Send the form data
      );
      setSubmitMessage('Thank you for joining our waitlist!');
      setFormData({ name: '', email: '', phonenumber: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">BuzzRang</h1>
        <div className="flex items-center space-x-4">
          <a href="#features" className="bg-gradient-to-r text-white px-4 py-2 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300">Features</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center mb-12">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
Experience Fashion Like <br />Never Before.
</motion.h2>
        <p className="text-xl mb-8 text-white">Shop fashion with personalized style and trusted sellers, making every choice uniquely yours.</p>
        <button onClick={toggleModal} className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-4 py-2 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300">
          Join WaitList
        </button>
      </main>

      {/* Hero Image */}
      <div className="col-span-1 flex justify-center items-center">
        <motion.img
          src="https://cloud.appwrite.io/v1/storage/buckets/66f9781c0012a5f3a4c4/files/66f9783b001020894523/view?project=66ee22b6001551106b0e&project=66ee22b6001551106b0e&mode=admin"
          alt="ShopSwipe App Screenshot"
          className="rounded-3xl shadow-lg md:h-2/3 md:w-2/3 h-full w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        />
      </div>

      {/* World’s Best Features Section */}
      <section className="py-20" id="features">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Features
          </h3>
          <p className="text-lg text-gray-400 mt-2">Experience cutting-edge technology and seamless shopping like never before.</p>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature Cards */}
          <FeatureCard
            icon={<ShoppingBag size={48} className="text-white mb-4" />}
            title="Swipe to Shop"
            description="Swipe through collections just like a dating app! Our unique interface learns your preferences to show you products you'll love."
            bgColor="bg-gradient-to-r from-purple-500 to-pink-500"
          />
          <FeatureCard
            icon={<Heart size={48} className="text-white mb-4" />}
            title="Curated For You"
            description="Get personalized recommendations based on your style preferences and past purchases. Every item is tailored just for you."
            bgColor="bg-gradient-to-r from-red-500 to-pink-500"
          />
          <FeatureCard
            icon={<CheckCircle size={48} className="text-white mb-4" />}
            title="Verified & Trusted Sellers"
            description="Shop confidently with our verified sellers' program. Unlike Instagram, we ensure every seller is vetted, providing you with genuine and trustworthy options."
            bgColor="bg-gradient-to-r from-green-500 to-teal-500"
          />
          <FeatureCard
            icon={<Star size={48} className="text-white mb-4" />}
            title="Top Picks"
            description="Check out our trending items and top picks, updated daily to keep you on top of the latest fashion trends."
            bgColor="bg-gradient-to-r from-blue-500 to-indigo-500"
          />
          <div className="relative">
            <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">Upcoming</span>
            <FeatureCard
              icon={<Camera size={48} className="text-white mb-4" />}
              title="AI Try-On"
              description="See how each outfit looks on *you* before you buy. With our AI Try-On, try on clothes virtually and see a perfect fit every time."
              bgColor="bg-gradient-to-r from-yellow-500 to-red-500"
            />
          </div>
          <div className="relative">
            <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">Upcoming</span>
            <FeatureCard
              icon={<Play size={48} className="text-white mb-4" />}
              title="Reels for Real Feels"
              description="Watch short reels to see products in action. Know exactly how it fits and looks from every angle before making a decision."
              bgColor="bg-gradient-to-r from-blue-500 to-teal-500"
            />
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-black rounded-lg p-6 w-11/12 sm:w-1/3">
            <h2 className="text-xl font-bold mb-4 text-center">Join the Waitlist</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-300">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border rounded w-full py-2 px-3 text-gray-700" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-300">Number</label>
                <input 
                  type="tel" 
                  name="phonenumber" 
                  value={formData.phonenumber}
                  onChange={handleInputChange}
                  className="border rounded w-full py-2 px-3 text-gray-700" 
                  placeholder="Your Phone Number" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-300">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border rounded w-full py-2 px-3 text-gray-700" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <button 
                type="submit" 
                className={`bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              {submitMessage && <p className="mt-4 text-center text-white">{submitMessage}</p>}
            </form>
            <button 
              onClick={toggleModal} 
              className="absolute text-4xl top-0 right-0 mt-2 mr-2 text-white hover:text-red-500"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const FeatureCard = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${bgColor} text-white`}>
      <div className="flex items-center mb-4">
        {icon}
        <h4 className="text-xl font-bold ml-2">{title}</h4>
      </div>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default LandingPage;
