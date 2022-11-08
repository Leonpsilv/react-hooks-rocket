import React, { useState, useEffect } from 'react';

function App() {
  const [repositories, setRepositories] = useState([]);

  // useEffect(() => {

  // }, [repositories]); // só executa quando uma das variáveis passadas mudarem

  useEffect(() =>{
    const fetchData = async () => { // useEffect só executa funções assíncronas dessa forma
      const reponse = await fetch('https://api.github.com/users/diego3g/repos');
      const data = await reponse.json();
  
      return setRepositories(data);
    }
    fetchData();
  }, []); // array vazio vai executar apenas uma vez: é o que desejamos nesse caso

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
    });

    setRepositories(newRepositories);
  }

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span> FAVORITO</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
