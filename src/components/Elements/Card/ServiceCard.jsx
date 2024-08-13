import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const ServiceCard = ({ image, title, description, style }) => {
  return (
    <Card
      hoverable
      style={{ 
        width: '100%',        // Use 100% width for responsiveness
        maxWidth: '500px',    // Limit the maximum width
        margin: '0 auto',     // Center the card horizontally
        ...style              // Allow overriding default style with prop
      }} 
      cover={<img alt={title} src={image} style={{ width: '100%' }} />} // Ensure image is responsive
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default ServiceCard;
