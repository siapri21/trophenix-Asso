import { useState } from 'react';
import { Link } from 'react-router-dom';

const ParrainsSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    { id: 1, src: 'https://www.youtube-nocookie.com/embed/hkSnuqwXTKk' },
    { id: 2, src: 'https://www.youtube-nocookie.com/embed/hkSnuqwXTKk' },
    { id: 3, src: 'https://www.youtube-nocookie.com/embed/hkSnuqwXTKk' }
  ];

  const handleVideoClick = (index) => {
    setCurrentVideo(index);
    const videoElement = document.getElementById(`video-${index}`);
    videoElement.src = videoElement.src.replace('&mute=1', ''); // Activer le son
  };

  return (
    <div className="flex justify-center items-center h-screen  bg-blue-900 ">
      <div className=" max-w-4xl w-full p-5 rounded-lg  flex">
        {/* Texte à gauche */}
        <div className="w-1/2 p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">Purus sagittis fringilla arcu</h2>
          <p className="text-gray-300 mb-6">
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
          </p>
        <Link to="/parrains"> 
         <button className="bg-orange-500 text-white px-4 py-2 rounded-full">partenaire</button>
        </Link>
        </div>

        {/* Carrousel de vidéos à droite */}
        <div className="w-1/2 relative">
          <div className="relative h-64 overflow-hidden">
            {videos.map((video, index) => (
              <iframe
                key={video.id}
                id={`video-${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  currentVideo === index ? 'opacity-100' : 'opacity-0'
                }`}
                src={video.src}
                title={`Video ${index + 1}`}
                allow="autoplay; encrypted-media"
                frameBorder="0"
                allowFullScreen
                onClick={() => handleVideoClick(index)}
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParrainsSection;
