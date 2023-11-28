import axios from "axios";
import React, { useEffect, useState } from "react";

const Pixabay1 = () => {
  const APP_KEY = "40939942-6f37ed5b27c8608a1830e7f59";
  const TEXT = "크리스마스";
  const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${TEXT}&image_type=photo&lang=ko`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data.hits);
        console.log("성공: ", res.data.hits);
      } catch (err) {
        console.log("오류: ", err);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h2>pixabay1</h2>
      <div>
        {data &&
          data.map((image) => (
            <img
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              style={{ width: 200, height: 170, verticalAlign: "top" }}
            />
          ))}
      </div>
    </div>
  );
};

export default Pixabay1;
