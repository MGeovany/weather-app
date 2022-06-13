import { useEffect, useState } from "react";
import { ImageData } from "../types/Types";

const APIKEY = process.env.REACT_APP_AUTH_KEY;

const useImage = (city: string) => {
  const url = `https://api.pexels.com/v1/search?query=${city}`;

  const [image, setImage] = useState<ImageData>({
    id: 0,
    url: "",
    src: {
      original: "",
      small: "",
      alt: "",
    },
  });

  const getImage = async () => {
    fetch(url, {
      headers: {
        Authorization: `${APIKEY}`, // process.env.REACT_APP_AUTH_KEY
      },
    })
      .then((data) => data.json())
      .then((data) => setImage(data.photos[0]));
  };

  useEffect(() => {
    getImage();
    image.id !== 0 ? console.log("Rate limit exceeded") : getManualImage(city);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getManualImage = (city: string) => {
    switch (city) {
      case "San Pedro Sula":
        let getSps: ImageData = {
          id: 1,
          url: "",
          src: {
            original:
              "https://images.pexels.com/photos/2959618/pexels-photo-2959618.jpeg",
            small:
              "https://images.pexels.com/photos/2959618/pexels-photo-2959618.jpeg",
            alt: "San Pedro Sula",
          },
        };
        setImage(getSps);
        break;
      case "Tokyo":
        let getTokyo: ImageData = {
          id: 1,
          url: "",
          src: {
            original:
              "https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            small:
              "https://images.pexels.com/photos/2959618/pexels-photo-2959618.jpeg",
            alt: "Tokyo",
          },
        };
        setImage(getTokyo);
        break;
      case "Londres":
        let getLondres: ImageData = {
          id: 1,
          url: "",
          src: {
            original:
              "https://images.pexels.com/photos/372470/pexels-photo-372470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            small:
              "https://images.pexels.com/photos/2959618/pexels-photo-2959618.jpeg",
            alt: "Londres",
          },
        };
        setImage(getLondres);
        break;
      case "Sydney":
        let getSydney: ImageData = {
          id: 1,
          url: "",
          src: {
            original:
              "https://images.pexels.com/photos/783682/pexels-photo-783682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            small:
              "https://images.pexels.com/photos/2959618/pexels-photo-2959618.jpeg",
            alt: "Sydney",
          },
        };
        setImage(getSydney);
        break;
      case "Nueva York":
        let getNuevaYork: ImageData = {
          id: 1,
          url: "",
          src: {
            original:
              "https://images.pexels.com/photos/12373196/pexels-photo-12373196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            small:
              "https://images.pexels.com/photos/2959618/pexels-photo-2959618.jpeg",
            alt: "Nueva",
          },
        };
        setImage(getNuevaYork);
        break;
      case "Paris" || "Alaska":
        let Paris: ImageData = {
          id: 1,
          url: "",
          src: {
            original:
              "https://images.pexels.com/photos/5090483/pexels-photo-5090483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            small:
              "https://images.pexels.com/photos/2959618/pexels-photo-2959618.jpeg",
            alt: "Londres",
          },
        };
        setImage(Paris);
        break;

      default:
        return {
          id: 400,
          url: "",
          src: {
            original: "",
            small: "",
            alt: "",
          },
        };
    }
  };

  return {
    image,
  };
};

export default useImage;
