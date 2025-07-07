import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Footer = () => {







  return (
    <motion.footer
      className="text-white "
  
    >
  
      <Copyright />
    </motion.footer>
  );
};

export default Footer;


const Copyright = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [view, setView] = useState(false);
  return (
    <div className="w-full text-center py-4 bg-secondary text-primary text-xl font-medium">
      {view && <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 fixed top-0 left-0 right-0 bottom-20 origin-center z-50">
        <img src="/images/allsafe.jpg" alt="logo" className="w-full h-full object-contain md:object-cover " />
      </motion.div>}
      <p>

        All Rights Reserved For ©
        <Link
          onMouseEnter={() => setView(true)}
          onMouseLeave={() => setView(false)}
          target="_blank" to="https://www.allsafeeg.com/en"
          className="font-bold text-yellow-500 animation px-2">All Safe</Link>
        {year}
      </p>
    </div>
  );
};
  