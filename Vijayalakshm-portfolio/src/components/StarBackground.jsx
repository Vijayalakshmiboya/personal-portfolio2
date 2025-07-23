import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

// import { useEffect, useState } from "react";

// export const StarBackground = () => {
//   const [stars, setStars] = useState([]);
//   const [meteors, setMeteors] = useState([]);

//   useEffect(() => {
//     generateStars();
//     generateMeteors();

//     const handleResize = () => {
//       generateStars();
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const generateStars = () => {
//     const numberOfStars = Math.floor(
//       (window.innerWidth * window.innerHeight) / 8000
//     );

//     const newStars = [];
//     for (let i = 0; i < numberOfStars; i++) {
//       newStars.push({
//         id: i,
//         size: Math.random() * 2 + 0.5,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         opacity: Math.random() * 0.5 + 0.3,
//         animationDuration: Math.random() * 5 + 3,
//       });
//     }
//     setStars(newStars);
//   };

//   const generateMeteors = () => {
//     const numberOfMeteors = 3;
//     const newMeteors = [];
//     for (let i = 0; i < numberOfMeteors; i++) {
//       newMeteors.push({
//         id: i,
//         size: Math.random() * 1.5 + 0.5,
//         x: Math.random() * 100,
//         y: Math.random() * 20,
//         delay: Math.random() * 20,
//         animationDuration: Math.random() * 3 + 2,
//       });
//     }
//     setMeteors(newMeteors);
//   };

//   return (
//     <>
//       <style>
//         {`
//           .glass-night-bg {
//             backdrop-filter: blur(10px);
//             background: radial-gradient(circle at top, rgba(15, 23, 42, 0.9), rgba(0, 0, 0, 0.8));
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             z-index: 0;
//           }

//           .star {
//             position: absolute;
//             background-color: white;
//             border-radius: 50%;
//             box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
//           }

//           .meteor {
//             position: absolute;
//             background: linear-gradient(90deg, white, transparent);
//             border-radius: 2px;
//             transform: rotate(-45deg);
//             opacity: 0.8;
//           }

//           @keyframes pulse-subtle {
//             0% { transform: scale(1); opacity: 0.7; }
//             50% { transform: scale(1.3); opacity: 1; }
//             100% { transform: scale(1); opacity: 0.7; }
//           }

//           .animate-pulse-subtle {
//             animation: pulse-subtle 5s ease-in-out infinite;
//           }

//           @keyframes meteor {
//             0% { transform: translate(0, 0) rotate(-45deg); opacity: 1; }
//             100% { transform: translate(300px, 300px) rotate(-45deg); opacity: 0; }
//           }

//           .animate-meteor {
//             animation: meteor linear infinite;
//           }
//         `}
//       </style>

//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         <div className="glass-night-bg"></div>

//         {stars.map((star) => (
//           <div
//             key={star.id}
//             className="star animate-pulse-subtle"
//             style={{
//               width: `${star.size}px`,
//               height: `${star.size}px`,
//               left: `${star.x}%`,
//               top: `${star.y}%`,
//               opacity: star.opacity,
//               animationDuration: `${star.animationDuration}s`,
//             }}
//           />
//         ))}

//         {meteors.map((meteor) => (
//           <div
//             key={meteor.id}
//             className="meteor animate-meteor"
//             style={{
//               width: `${meteor.size * 50}px`,
//               height: `${meteor.size * 2}px`,
//               left: `${meteor.x}%`,
//               top: `${meteor.y}%`,
//               animationDelay: `${meteor.delay}s`,
//               animationDuration: `${meteor.animationDuration}s`,
//             }}
//           />
//         ))}
//       </div>
//     </>
//   );
// };
