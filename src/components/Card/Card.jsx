import React from "react";
// import { Card } from 'antd';

// const { Meta } = Card;

// const CardApp = ({image, text, age}) => (
//   <Card
//     hoverable
//     style={{
//       width: 240,
//     }}
//     cover={<img alt={text} src={image} />}
//   >
//     <Meta title={text} description={age} />
//   </Card>
// );
// export default CardApp;

function CatCard(cats) {
  return (
    <div className="cat-card">
      <img src={cats.image} alt={cats.name} />
      <h2>{cats.name}</h2>
      <p>Возраст: {cats.age}</p>
    </div>
  );
}

export default CatCard;
