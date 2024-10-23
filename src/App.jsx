import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao Projeto Hotjar com React</h1>
        <p>Esta página simples foi criada para testar a integração com o Hotjar e Netlify.</p>
        <form>
          <label>
            Seu Feedback:
            <input type="text" name="feedback" />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </header>
    </div>
  );
}

export default App;