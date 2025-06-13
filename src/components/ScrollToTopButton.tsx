import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        title="Go to top"
        className="fixed bottom-5 right-5 bg-red-600 text-white text-lg p-4 rounded-full shadow-lg hover:bg-red-700 transition duration-300 z-50"
      >
        <i className="fas fa-arrow-up" />
      </button>
    )
  );
}

export default ScrollToTopButton;
