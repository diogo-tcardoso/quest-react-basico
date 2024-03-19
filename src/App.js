import './App.css';
import TextUppercase from './components/text/text';
import Button from './components/button/button';

function App() {
  return (
    <>
    <h2 className='title'>Meu Parágrafo Colorido</h2>
    <div>
      <TextUppercase text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
    </div>
    <Button label="Baixar CV"/>
    </>
  );
}

export default App;
