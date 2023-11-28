import React, { useState, useEffect, useRef } from "react";

const Box = ({ boxStyle }) => {
  const [style, setStyle] = useState();
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
    setStyle(boxStyle);
  }, [boxStyle]);

  return (
    <div>
      <div style={style}>Box</div>
    </div>
  );
};

export default Box;
