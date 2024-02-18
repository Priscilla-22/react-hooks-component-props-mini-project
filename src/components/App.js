// App.js
import React from 'react';
import Header from './Header';
import About from './About';
import Article from './Article'
import ArticleList from './ArticleList';
import blogData from '../data/blog';
import { calculateEmojis } from '../assets/Emoji';

function App() {
  return (
    <div className='App'>
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />{' '}
      {blogData.posts.map((post) => (
        <div key={post.id}>
          <Article title={post.title} date={post.date} preview={post.preview} />
          {post.minutes <= 30
            ? calculateEmojis(post.minutes, 'coffee')
            : calculateEmojis(post.minutes, 'bento')}
          {post.minutes} min read
        </div>
      ))}
    </div>
  );
}

export default App;
