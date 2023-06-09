import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CardApp = ({image, text, age}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt={text} src={image} />}
  >
    <Meta title={text} description={age} />
  </Card>
);
export default CardApp;
