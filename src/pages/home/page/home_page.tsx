import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const HomePage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-01T12:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span
        key={interval}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg mx-2 my-1 animate-pulse"
      >
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4">
      <img
        src="http://nikya.in/caygnus.png"
        alt="Logo"
        className="w-320 h-32 mb-4 animate-bounce"
      />
      <h1 className="text-5xl font-bold mb-8 animate-fade-in-down">
        CAYGNUS Launching Soon....
      </h1>
      <div className="flex justify-center mb-8 space-x-4">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>

      <div className="flex flex-col items-center">
        <a
          href="https://chat.whatsapp.com/D8Zxo4pQvZBH0MYm5z3sQc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg mb-4 transition duration-300"
        >
          <img
            src="https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo.png" // Replace with your WhatsApp logo image URL
            alt="WhatsApp Logo"
            className="w-100 h-8 mr-3"
          />
          Join on WhatsApp
        </a>
        <p className="text-sm text-gray-300 mb-4">
          For more updates, join us on WhatsApp!
        </p>

        <div className="flex space-x-4">
          <a
            href="http://instagram.com/caygnus/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-lg transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" // Replace with your Instagram logo image URL
              alt="Instagram Logo"
              className="w-8 h-8 mr-3"
            />
            Follow on Instagram
          </a>
          <a
            href="http://linkedin.com/company/caygnus/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg shadow-lg transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" // Replace with your LinkedIn logo image URL
              alt="LinkedIn Logo"
              className="w-8 h-8 mr-3"
            />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
