import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('y1dCE7i8xwDUQGJfD');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    const loadingToast = toast.loading('Sending message...');

    try {
      const formData = new FormData(formRef.current);
      const data = {
        from_name: formData.get('from_name')?.toString().trim(),
        reply_to: formData.get('reply_to')?.toString().trim(),
        message: formData.get('message')?.toString().trim(),
        to_email: formData.get('to_email')?.toString().trim(),
      };

      console.log('Form Data:', data);

      // Validate data
      if (!data.from_name || !data.reply_to || !data.message) {
        throw new Error('Please fill in all fields');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.reply_to)) {
        throw new Error('Please enter a valid email address');
      }

      // Validate to_email if provided
      if (data.to_email && !emailRegex.test(data.to_email)) {
        throw new Error('Invalid recipient email address');
      }

      const result = await emailjs.sendForm(
        'service_7sqobe8',
        'template_xqx6cy1',
        formRef.current
      );

      console.log('EmailJS Result:', result);

      if (result.status === 200) {
        toast.success('Message sent successfully!', { id: loadingToast });
        formRef.current.reset();
      } else {
        throw new Error(`Failed to send message. Status: ${result.status}`);
      }
    } catch (error: any) {
      console.error('EmailJS Error Details:', {
        message: error.message,
        status: error.status,
        text: error.text,
        response: error.response,
      });
      const errorMessage = error.text || error.message || 'Failed to send message. Please try again.';
      toast.error(errorMessage, { id: loadingToast });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className={`${isDarkMode ? 'bg-[#161822]/95 border-[#1f2335]' : 'bg-white border-gray-200'} backdrop-blur-lg p-6 md:p-8 rounded-2xl border shadow-lg hover-glow`}>
        <h2 className={`${isDarkMode ? 'text-[#c792ea]' : 'text-purple-600'} text-xl mb-8 flex items-center gap-2`}>
          <span className="text-gray-400">{'/*'}</span> Contact Form <span className="text-gray-400">{'*/'}</span>
        </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block mb-2 ${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'}`}>Name</label>
            <input
              type="text"
              name="from_name"
              required
              onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter your name')}
              onInput={(e) => e.currentTarget.setCustomValidity('')}
              className={`w-full p-3 rounded-lg ${
                isDarkMode 
                  ? 'bg-[#1f2335] border-[#2a3042] text-[#a6accd] focus:border-[#82aaff]' 
                  : 'bg-gray-50 border-gray-200 focus:border-blue-500'
              } border focus:outline-none focus:ring-1 focus:ring-opacity-50 transition-all duration-300`}
            />
          </div>
          <div>
            <label className={`block mb-2 ${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'}`}>Email</label>
            <input
              type="email"
              name="reply_to"
              required
              onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter a valid email address')}
              onInput={(e) => e.currentTarget.setCustomValidity('')}
              className={`w-full p-3 rounded-lg ${
                isDarkMode 
                  ? 'bg-[#1f2335] border-[#2a3042] text-[#a6accd] focus:border-[#82aaff]' 
                  : 'bg-gray-50 border-gray-200 focus:border-blue-500'
              } border focus:outline-none focus:ring-1 focus:ring-opacity-50 transition-all duration-300`}
            />
          </div>
          <div>
            <label className={`block mb-2 ${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'}`}>Message</label>
            <textarea
              name="message"
              required
              rows={5}
              onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter your message')}
              onInput={(e) => e.currentTarget.setCustomValidity('')}
              className={`w-full p-3 rounded-lg ${
                isDarkMode 
                  ? 'bg-[#1f2335] border-[#2a3042] text-[#a6accd] focus:border-[#82aaff]' 
                  : 'bg-gray-50 border-gray-200 focus:border-blue-500'
              } border focus:outline-none focus:ring-1 focus:ring-opacity-50 transition-all duration-300`}
            ></textarea>
          </div>
          {/* Add this only if the template requires a to_email field */}
          <input
            type="hidden"
            name="to_email"
            value="your.email@gmail.com" // استبدل ببريدك الفعلي
          />
          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg ${
              isDarkMode
                ? 'bg-[#82aaff] hover:bg-[#89ddff] text-[#1f2335]'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            } font-medium transition-colors duration-300 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};