import React from "react";

interface ITopImages {
  images: { src: string; alt: string }[];
}
const TopImages: React.FC<ITopImages> = (props) => {
  const { images } = props;
  return (
    <>
      {/* Image gallery */}
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-60/20/20 lg:gap-x-4 lg:px-8">
        {/* <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div> */}
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
          <div className="aspect-h-2 aspect-h-3 overflow-hidden rounded-lg">
            <img
              src={images[1].src}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        {/* <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div> */}
      </div>
    </>
  );
};

export default TopImages;
