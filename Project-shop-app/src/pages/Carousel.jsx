import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://tse2.mm.bing.net/th/id/OIP.RaoNOjhR-10yEYwpD-VlMAHaEK?pid=Api&P=0&h=180',
  'https://images.unsplash.com/photo-1537274942065-eda9d00a6293?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1687405181991-ac537513efdc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1664268415556-dbe16262b350?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[70vh] overflow-hidden relative">
      <AnimatePresence>
        <motion.img
          key={images[current]}
          src={images[current]}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute w-full h-full object-cover rounded-xl shadow-lg"
        />
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
