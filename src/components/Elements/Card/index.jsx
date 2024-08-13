import React from 'react';
import { CommentOutlined, ShareAltOutlined,HeartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;


const Paper = ({ imageSrc, width = 200, title, description, className='w-64' }) => {

  return (
    <Card
      className= {className}
      
      cover={
        <img
          alt="example"
          src={imageSrc}
          style={{ width: '100%' }} // Pastikan gambar mengisi seluruh lebar card
         // Tambahkan className jika diperlukan
        />
      }
      actions={[
        <HeartOutlined key="setting" />,
        <CommentOutlined key="edit" />,
        <ShareAltOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title={title}
        description={description}
      />
    </Card>
  );
};

export default Paper;
