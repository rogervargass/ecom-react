import React from 'react';

type ImageGalleryProps = {
  images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState<string>(images[0]);

  if (!images || images.length === 0) return;

  return (
    <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
      <div className="flex gap-3 sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
        {images.map((image, index) => (
          <img key={index} src={image} onClick={() => setSelectedImage(image)} className="w-[24%] sm:w-full flex flex-shrink-0 cursor-pointer" />
        ))}
      </div>
      <div className="w-full sm:w-[80%]">
        <img className="w-full h-auto" src={selectedImage} alt="" />
      </div>
    </div>
  )
}

export default ImageGallery