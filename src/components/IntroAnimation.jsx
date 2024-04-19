// IntroAnimation.js

import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Logo from '../assets/images/img1.svg'

const IntroAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Simulate a delay before hiding the animation
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Transition
      show={showAnimation}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0 "
      enterTo="opacity-100 translate-x-40"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black">
        <img src={Logo} width={40} /> {/* Adjust size as needed */}
      </div>
    </Transition>
  );
};

export default IntroAnimation;
