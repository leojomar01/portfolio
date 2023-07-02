import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Test() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Hello, Framer Motion!</h1>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        Click Me
      </motion.button>
    </div>
    </>
  );
}

export default Test;
