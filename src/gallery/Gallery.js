import React, { useRef, useState } from "react";
import GalleryItem from "./GalleryItem";
import axios from "axios";
import galleryStyle from "../assets/style/Gallery.module.css";

const Gallery = () => {
  const [text, setText] = useState("");

  const APP_KEY = "40939942-6f37ed5b27c8608a1830e7f59";
  const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${text}&image_type=photo&lang=ko`;

  const [data, setData] = useState([]);

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("내용을 입력하세요");
      return;
    }
    getData();
  };

  const getData = async () => {
    try {
      const res = await axios.get(URL);
      setData(res.data.hits);
    } catch (err) {
      console.log("오류: ", err);
    }
  };

  return (
    <section className={galleryStyle.gallery}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} name="text" onChange={changeInput} />
        <button type="submit">검색</button>
      </form>
      <GalleryItem data={data} />
    </section>
  );
};

export default Gallery;
