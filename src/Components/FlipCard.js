import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = () => {
  const [activePage, setActivePage] = useState(0);

  const pages = [
    {
      front: {
        subtitle: 'Client Name',
        content: 'THE STORY.',
        pageNumber: 1,
      },
      back: {
        subtitle: 'Client Name',
        content: "In the heart of a lively village, where cobblestone streets intertwined with laughter, there lived a spirited boy named Samir. One sunny day, while exploring the dusty shelves of the community center, he stumbled upon a forgotten book that held the secrets of children's rights.",
        pageNumber: 2,
      },
    },
    {
      front: {
        subtitle: 'Client Name',
        content: 'As he delved into its pages, the words painted a vivid picture of the privileges and freedoms every child deserved the right to education, the right to play, and the right to be heard. Eager to share this newfound wisdom, Samir gathered his closest friends beneath the ancient oak tree, the village\'s cherished meeting spot.',
        pageNumber: 3,
      },
      back: {
        subtitle: 'Client Name',
        content: 'With bright eyes and an earnest voice, he narrated the tales from the book and spoke of the rights that danced within each child\'s heart. Inspired by his words, the children decided to organize a village fair, a celebration of their rights and a declaration to the world that childhood should be filled with joy and opportunity.',
        pageNumber: 4,
      },
    },
    // Add more pages as needed
  ];

  const previous = () => {
    setActivePage((prevPage) => {
      const newPage = Math.max(prevPage - 1, 0);
      console.log('Previous Page:', prevPage, 'New Page:', newPage);
      return newPage;
    });
};

  const next = () => {
    setActivePage((prevPage) => {
      const newPage = Math.min(prevPage + 1, pages.length - 1);
      console.log('Current Page:', prevPage, 'New Page:', newPage);
      return newPage;
    });
  };

  return (
    <div className="center">
      <div className="book">
        <div className="pages">
          {pages.map((page, index) => (
            <div
              key={index}
              className={`page ${activePage === index ? 'active' : ''}`}
              style={{
                transform: `rotateY(${activePage === index ? 0 : 180}deg)`,
                zIndex: pages.length - index,
              }}
            >
              <div className="page-side front">
                <div className="page-head">
                  <div className="page-subtitle">{page.front.subtitle}</div>
                </div>
                <div className="page-content">{page.front.content}</div>
                <div className="page-footer">
                  <span className="pg-no">{page.front.pageNumber}</span>
                </div>
              </div>
              <div className="page-side back">
                <div className="page-head">
                  <div className="page-subtitle">{page.back.subtitle}</div>
                </div>
                <div className="page-content">{page.back.content}</div>
                <div className="page-footer">
                  <span className="pg-no">{page.back.pageNumber}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <button type="button" className="btn" onClick={previous}>
          <span className="material-icons-outlined">arrow_back</span>
        </button>
        <button type="button" className="btn" onClick={next}>
          <span className="material-icons-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default FlipCard;
