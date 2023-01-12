import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';

const handleShare = async imageUrl => {
  try {
    alert(imageUrl);
    const endpoint =
      'https://your-api-gateway-endpoint.execute-api.us-east-1.amazonaws.com/prod/share';
    const res = await axios.get(endpoint, {
      params: {
        imageUrl,
      },
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

const Home = () => {
  const n = 20;
  const data = Array.from({ length: n }, (_, i) => i);

  const [cards, setCards] = useState([]);
  const [gridTemplateRows, setGridTemplateRows] = useState('');
  const [gridTemplateColumns, setGridTemplateColumns] = useState('');

  useEffect(() => {
    setCards(data);
  }, [data]);

  useEffect(() => {
    setGridTemplateRows(`repeat(${Math.ceil(cards.length / 5)}, auto)`);
    setGridTemplateColumns(`repeat(${Math.ceil(cards.length / 4)}, auto)`);
  }, [cards.length]);

  // const handleShare = imageUrl => {
  //   alert(imageUrl);
  // };

  return (
    <div className="home-container">
      <div className="header">
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Popular</a>
          <a href="#">Following</a>
        </div>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="main">
        <div
          className="content"
          style={{ gridTemplateRows, gridTemplateColumns }}
        >
          {data.map((i, index) => {
            return (
              <div key={i} className="card">
                <img
                  src={`https://picsum.photos/600?random=${i}`}
                  alt="random"
                />
                <div className="card-content">
                  <h2>Card Title</h2>
                  <p>Card Description</p>
                  <button
                    className="card-share-button"
                    onClick={() =>
                      handleShare(`https://picsum.photos/600?random=${i}`)
                    }
                  >
                    Share
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
