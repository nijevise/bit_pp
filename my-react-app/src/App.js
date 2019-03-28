import React, { Component } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import PostList from './components/postList'

const App = () => {

  return (
    <div className="App">
      <Header title="My react Blog" />
      <main className="main">
        <PostList />
      </main>
      <Footer title="Copyright &copy; BitStudent" year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
