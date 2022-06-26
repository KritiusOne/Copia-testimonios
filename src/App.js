import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <h1 className='app-container-title'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
        img='luffy.jpeg'
        name='Mokey D. Luffy'
        aka='El Quinto Emperador'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper mattis tellus, a rhoncus libero vehicula a. Phasellus auctor ante eu tincidunt sodales. Donec bibendum sodales porta. Aenean tempus enim.' />
        <Testimonio
        img='naruto.png'
        name='Naruto Uzumaki'
        aka='El septimo hokage'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper mattis tellus, a rhoncus libero vehicula a. Phasellus auctor ante eu tincidunt sodales. Donec bibendum sodales porta. Aenean tempus enim.' />
        <Testimonio
        img='steve.jpg'
        name='Steve'
        aka='El mejor constructor del mundo'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper mattis tellus, a rhoncus libero vehicula a. Phasellus auctor ante eu tincidunt sodales. Donec bibendum sodales porta. Aenean tempus enim.' />
      </div>
      
    </div>
  );
}

export default App;
