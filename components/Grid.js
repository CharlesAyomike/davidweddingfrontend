"use client"
import { useState } from 'react';

const Grid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample image data - replace URLs with your actual image paths
  const images = [
    { id: 1, src: '/banner.jpeg', alt: 'Gallery Image 1', width: 'col-span-2' },
    { id: 2, src: '/ph1.jpeg', alt: 'Gallery Image 2', width: 'col-span-1' },
    { id: 3, src: '/ph2.jpeg', alt: 'Gallery Image 3', width: 'col-span-1' },
    { id: 4, src: '/ph3.jpeg', alt: 'Gallery Image 4', width: 'col-span-1' },
    { id: 5, src: '/ph4.jpeg', alt: 'Gallery Image 5', width: 'col-span-1' },
    { id: 6, src: '/ph5.jpeg', alt: 'Gallery Image 6', width: 'col-span-2' },
    { id: 7, src: '/ph6.jpeg', alt: 'Gallery Image 7', width: 'col-span-1' },
    { id: 9, src: '/ph7.jpeg', alt: 'Gallery Image 9', width: 'col-span-2' },
    { id: 10, src: '/ph9.jpeg', alt: 'Gallery Image 10', width: 'col-span-1' },
    { id: 10, src: '/ph11.jpeg', alt: 'Gallery Image 10', width: 'col-span-1' },
    { id: 11, src: '/ph12.jpeg', alt: 'Gallery Image 11', width: 'col-span-1' },
    { id: 12, src: '/ph19.jpeg', alt: 'Gallery Image 12', width: 'col-span-2' },
    { id: 13, src: '/ph13.jpeg', alt: 'Gallery Image 12', width: 'col-span-1' },
    { id: 14, src: '/ph15.jpeg', alt: 'Gallery Image 12', width: 'col-span-1' },
    { id: 15, src: '/ph16.jpeg', alt: 'Gallery Image 12', width: 'col-span-1' },
    { id: 17, src: '/ph17.jpeg', alt: 'Gallery Image 12', width: 'col-span-2' },
    { id: 18, src: '/ph18.jpeg', alt: 'Gallery Image 12', width: 'col-span-1' },
    { id: 19, src: '/ph20.jpeg', alt: 'Gallery Image 12', width: 'col-span-2' },
    { id: 20, src: '/ph10.jpeg', alt: 'Gallery Image 12', width: 'col-span-1' },
    { id: 21, src: '/ph21.jpeg', alt: 'Gallery Image 12', width: 'col-span-1' },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Image Grid */}
      <div className="md:grid grid-flow-row-dense grid-cols-4 auto-rows-[300px] gap-2">
        {images.map((image) => (
          <div 
            key={image.id} 
            className={`${image.width} my-2 md:my-0 cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <button
              className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-black hover:bg-gray-200"
              onClick={() => setSelectedImage(null)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Grid;