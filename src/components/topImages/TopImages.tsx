import React from "react";
import Room1 from "../../../public/room/room1.jpg";
import Room2 from "../../../public/room/room.jpeg";

interface ITopImages {
  images: string[];
}
const TopImages: React.FC<ITopImages> = (props) => {
  const { images } = props;

  return (
    <>
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-60/20/20 lg:gap-x-4 lg:px-8">
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
          <div className="aspect-h-2 aspect-h-3 overflow-hidden rounded-lg">
            <img
              src={images[0] ? images[0] : Room1}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={images[1] ? images[1] : Room2}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={images[2] ? images[2] : Room2}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={images[3] ? images[3] : Room2}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={images[4] ? images[4] : Room1}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopImages;
