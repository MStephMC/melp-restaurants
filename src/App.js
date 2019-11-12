import React from 'react';
import './App.css';
import './styles/styles.scss';
import './styles/mixins.scss'


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        MELP 
      </header>
      <footer>
        <div class="contact">
            <i class="fa fa-phone-square"></i>
            <span>(55)3149-8112</span>
        </div>
        <div class="contact">
            <i class="fa fa-linkedin-square"></i>
            <a href="https://www.linkedin.com/in/" target="_blank">Magalli Mejia</a>
        </div>
        <div class="contact">
            <i class="fa fa-github-square"></i>
            <a href="https://github.com/" target="_blank">Magalli Mejia</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
