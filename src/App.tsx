/// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista'; // Ajuste o caminho conforme necessário

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Menu de Navegação */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Livros</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Lista de Livros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dados">Dados do Livro</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<LivroLista />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




