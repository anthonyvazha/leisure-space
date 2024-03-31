import { useState, useEffect } from "react";
import TopImages from "./components/topImages/TopImages";
import Tokyo from "../public/prefecture/tokyo.jpg";
import Japan from "../public/prefecture/japan.jpg";
import Osaka from "../public/prefecture/osaka.jpeg";
import Gifu from "../public/prefecture/gifu.jpeg";

import NoData from "../public/no-data.png";

import "react-before-after-slider-component/dist/build.css";

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

  useEffect(() => {
    let log = new URLSearchParams(window.location.search).get("id");

    const formData = new FormData();
    formData.append("modality", "TEXT");
    formData.append("top_k", "1");
    formData.append("query", "");
    formData.append("ids", log ?? "15");
    const requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: "Bearer 0e0d8e30-8eb5-4b6f-a1c3-0056a03c3f82",
      },
      body: formData,
    };

    fetch("https://api.vecto.ai/api/v0/space/28772/lookup", requestOptions)
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
      case "岐阜県":
        imageUrl = Gifu;
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
        case "トレーニング":
          tagImageUrl = "🏃🏻‍♂️‍➡️";
          break;
        case "その他のビジネス":
          tagImageUrl = "🏢";
          break;
        case "同窓会":
          tagImageUrl = "💻";
          break;
        default:
          tagImageUrl = "😀";
      }
    }
  }

  const formattedText = (text: string): string => {
    return text.split("■").join("<br />■");
  };

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
                          className="bg-primary text-white active:bg-blue-600 font-bold text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 mr-4"
                          type="button"
                        >
                          <span className="text-2xl">🏠</span>
                          {data.square_meter}m2
                        </button>
                        <button
                          className="bg-primary text-white active:bg-blue-600 font-bold text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 mr-4"
                          type="button"
                        >
                          <span className="text-2xl">🙍🏻‍♀️</span>
                          {data.num_of_people}
                        </button>
                        <button
                          className="bg-primary text-black active:bg-blue-600 font-bold text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          <span className="text-2xl">{tagImageUrl}</span>
                        </button>
                        <div className="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start"></div>
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl lg:mt-6 xl:text-6xl">
                          {data.room_title}
                        </h1>
                        <p
                          className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                          dangerouslySetInnerHTML={{
                            __html: formattedText(data.room_description),
                          }}
                        />
                      </div>
                    </div>
                    <div className="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
                      <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
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
              <h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl mx-48">
                {data.room_tagline}
              </h1>
              <div className="mt-10">
                <button
                  role="button"
                  className="relative inline-flex items-center justify-center p-0.5 mb-10 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:bg-black hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 "
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-primary rounded-md group-hover:bg-opacity-0">
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
              <div className="flex justify-center ">
                <iframe
                  width="100%"
                  height="500"
                  frameBorder="0"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCQWqkfbGYPa37QQlkCBzDSdD7UvxZ-mOk&q=${data.lat},${data.lon}`}
                  allowFullScreen
                ></iframe>
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
