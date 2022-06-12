import { useEffect, useState } from "react";
import axios from "axios";
import { ImageData } from "../types/Types";

export const useImage = (city: string) => {
  const [image, setImage] = useState<ImageData>({
    id: 0,
    largeImageURL: "",
  });

  const APIKEY = "28000800-35e84e382fcf18cfd3825052f";

  let url = `https://pixabay.com/api/?key=${APIKEY}&q=${city}`;
  useEffect(() => {
    setTimeout(() => {
      const getImage = async () => {
        try {
          const response = await axios.get(url);
          setImage(response.data.hits[0]);
        } catch (err) {
          console.log(err);
        }
      };
      getImage();
    }, 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    image,
  };
};
