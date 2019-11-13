import React from 'react';
import './App.css';
import './styles/styles.scss';
import './styles/mixins.scss'
import DescripcionCard from './app/components/DescripcionCard/DescripcionCard'
import TableRestaurants from './app/components/TableRestaurants/TableRestaurants'


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
       <div className="title"> MELP  </div> 
      </header>
      <section className = "selection-container">
          <DescripcionCard/>
          <TableRestaurants/>
      </section>
        cuerpo
      <footer>
        <div className="contact">
            <i className="fa fa-phone-square"></i>
            <span>(55)3149-8112</span>
        </div>
        <div className="contact">
            <i className="fa fa-linkedin-square"></i>
            <a href="https://www.linkedin.com/in/magallistephaniemejiacampos/" target="_blank">Magalli Mejia</a>
        </div>
        <div className="contact">
            <i className="fa fa-github-square"></i>
            <a href="https://github.com/MStephMC/melp-restaurants.git" target="_blank">MStephMC</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
