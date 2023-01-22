import Party from './components/Party.jsx';
import PokeList from './components/PokeList.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div class="bg-white min-h-screen max-h-screen font-poke flex flex-col">
      <Header />
      <main class="flex-1 flex flex-row items-stretch">
        <Party />
        <PokeList />
      </main>
    </div>
  );
}

export default App;
