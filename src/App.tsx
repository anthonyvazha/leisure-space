import { useState, useEffect } from "react";
import "react-before-after-slider-component/dist/build.css";
import TopImages from "./components/topImages/TopImages";
import Tokyo from "../public/prefecture/tokyo.jpg";
import Japan from "../public/prefecture/japan.jpg";
import Osaka from "../public/prefecture/osaka.jpeg";

import NoData from "../public/no-data.png";

interface IRoom {
  room_id: string;
  square_meter: string;
  end_at: string;
  town: string;
  prefecture: string;
  usage: string;
  lon: string;
  num_of_people: string;
  ward: string;
  start_at: string;
  room_tagline: string;
  room_title: string;
  booking_id: string;
  review_point?: string;
  rooms_capacity: string;
  user_id: string;
  room_description: string;
  booked_at: string;
  room_url: string;
  lat: string;
  images?: string[];
}

export default function App() {
  const [data, setData] = useState<IRoom | null>(null);

  const formData = new FormData();
  formData.append("modality", "TEXT");
  formData.append("top_k", "1");
  formData.append("query", "");
  formData.append("ids", "12");

  useEffect(() => {
    const formData = new FormData();
    formData.append("modality", "TEXT");
    formData.append("top_k", "1");
    formData.append("query", "");
    formData.append("ids", "12");

    const requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: "Bearer 73c59344-fdf4-4fe5-a6b9-790554a1a9c5",
      },
      body: formData,
    };

    fetch("https://api.vecto.ai/api/v0/space/28778/lookup", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.results && json.results.length > 0) {
          // Assuming the data you need is in the first item of the results array
          const data = json.results[0].attributes;
          console.log(data);
          setData(data); // Set the data in state
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  //image url for prefectures
  let imageUrl = "";
  let tagImageUrl = "";

  if (data?.prefecture !== null) {
    switch (data?.prefecture) {
      case "東京都":
        imageUrl = Tokyo;
        break;
      case "大阪府":
        imageUrl = Osaka;
        break;
      default:
        imageUrl = Japan;
    }

    if (data?.usage !== null) {
      switch (data?.usage) {
        case "住宅":
          tagImageUrl = "🏠";
          break;
        case "料理":
          tagImageUrl = "🍜";
          break;
        default:
          tagImageUrl = "😀";
      }
    }
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        {data ? (
          <div>
            <TopImages images={data.images ?? []} />
            <main>
              <div className="bg-white pt-10 sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8">
                <div className="mx-auto max-w-7xl lg:px-8">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                      <div className="lg:py-12">
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 font-bold text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
                          type="button"
                        >
                          <span className="text-2xl">🏠</span>
                          {data.square_meter}m2
                        </button>
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 font-bold text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 mr-4"
                          type="button"
                        >
                          <span className="text-2xl">🙍🏻‍♀️</span>
                          {data.num_of_people}
                        </button>
                        <button
                          className="bg-indigo-500 text-black active:bg-indigo-600 font-bold text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          <span className="text-2xl">{tagImageUrl}</span>
                        </button>
                        <div className="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start"></div>
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl lg:mt-6 xl:text-6xl">
                          {data.room_title}
                        </h1>
                        <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                          {data.room_description}
                        </p>
                      </div>
                    </div>
                    <div className="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
                      <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                        <img
                          className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none rounded-lg"
                          src={imageUrl}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {data.room_tagline}
              </h1>
              <div className="text-center mt-10">
                <button
                  role="button"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <a
                      href={data.room_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      For more information
                    </a>
                  </span>
                </button>
              </div>
              <div className="flex justify-center">
                <iframe
                  width="700"
                  height="500"
                  frameBorder="0"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCQWqkfbGYPa37QQlkCBzDSdD7UvxZ-mOk&q=${data.lat},${data.lon}`}
                  allowFullScreen
                ></iframe>
              </div>

              {/* Product info */}
              <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center align-middle">
              <img src={NoData} alt="No data available" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
