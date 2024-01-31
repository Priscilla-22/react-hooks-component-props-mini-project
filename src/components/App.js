import React from 'react';
import Header from './Header';
import About from './About';
import Article from './Article';
import blogData from '../data/blog';
import { calculateEmojis } from '../assets/Emoji'; 


// console.log(blogData);

function App() {
  return (
    <div className='App'>
      <Header name={blogData.name} />
      <About image={blogData.image} aboutText={blogData.about} />
      {blogData.posts.map((post) => (
        <div key={post.id}>
          <Article title={post.title} date={post.date} preview={post.preview} />
          {post.minutes <= 30
            ? calculateEmojis(post.minutes, 'coffee')
            : calculateEmojis(post.minutes, 'bento')}{' '}
          {post.minutes} min read
        </div>
      ))}
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
