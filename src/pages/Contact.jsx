import { motion } from 'framer-motion';
import { FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function Contact() {
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Official email domain validation
  const validateOfficialEmail = (email) => {
    const officialDomains = [
      /@(gmail|yahoo|outlook|protonmail|icloud|aol)\./i, // Common personal emails
      /@(edu|ac\.[a-z]{2,})/i, // Educational institutions
      /@(gov|mil)/i, // Government emails
      /@(companyname|yourdomain)\.com/i // Add your allowed domains
    ];
    
    const isValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isOfficial = officialDomains.some(regex => regex.test(email));
    
    return isValidFormat && isOfficial;
  };

  // Handle real-time validation
  useEffect(() => {
    if (formData.email && !validateOfficialEmail(formData.email)) {
      setEmailError('Enter a valid Mail Address');
    } else {
      setEmailError('');
    }
  }, [formData.email]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateOfficialEmail(formData.email)) {
      setEmailError('Please verify your official email address');
      return;
    }

    // Send the email using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Message Sent:', result.text);
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      }, (error) => {
        console.log('Error:', error.text);
        alert('An error occurred. Please try again later.');
      });
  };

  // Check form validity
  const isFormValid = formData.name && 
                     formData.email && 
                     formData.message && 
                     !emailError;

  return (
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Let's Connect
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Have a project in mind? Want to collaborate? Or just say hello?
        </p>
      </div>

      <motion.form
        className="space-y-6 backdrop-blur-sm bg-white/10 dark:bg-black/10 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative">
            <input
              className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all peer"
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-3 px-1 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 transition-all transform -translate-y-7 scale-75 peer-focus:scale-75 peer-focus:-translate-y-7 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 origin-[0]"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all peer"
              type="email"
              id="email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 px-1 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 transition-all transform -translate-y-7 scale-75 peer-focus:scale-75 peer-focus:-translate-y-7 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 origin-[0]"
            >
              Email
            </label>
            {emailError && (
              <p className="text-red-500 text-sm mt-2" role="alert">
                {emailError}
              </p>
            )}
          </div>
        </div>

        <div className="relative">
          <textarea
            className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none peer"
            rows="5"
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-3 px-1 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 transition-all transform -translate-y-7 scale-75 peer-focus:scale-75 peer-focus:-translate-y-7 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 origin-[0]"
          >
            Your Message
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!isFormValid}
          aria-label="Send message"
        >
          <FiSend className="w-5 h-5" />
          <span>Send Message</span>
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
