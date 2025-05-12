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
    emailjs.init('y1dCE7i8xwDUQGJfD');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    const loadingToast = toast.loading('Sending message...');

    try {
      const result = await emailjs.sendForm(
        'service_oo4n4or',
        'template_rx5ptzb',
        formRef.current,
        'y1dCE7i8xwDUQGJfD'
      );

      if (result.status === 200) {
        toast.success('تم إرسال الرسالة بنجاح!');
        formRef.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('حدث خطأ أثناء إرسال الرسالة');
    } finally {
      setIsSending(false);
      toast.dismiss(loadingToast);
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