import itemStyle from "../assets/style/GalleryItem.module.css";

const GalleryItem = ({ data }) => {
  return (
    <div className={itemStyle.item}>
      {data &&
        data.map((item) => (
          <ul>
            <li>#{item.user}</li>
            <li>
              <img key={item.id} src={item.webformatURL} alt={item.tags} />
            </li>
            <li>태그 : {item.tags}</li>
            <li>뷰어 : {item.views}</li>
            <li>종류 : {item.type}</li>
          </ul>
        ))}
    </div>
  );
};

export default GalleryItem;
