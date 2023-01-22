import Party from './components/Party.jsx';
import PokeList from './components/PokeList.jsx';

function App() {
  return (
    <div class="bg-white min-h-screen max-h-screen font-poke flex flex-col">
      <header class="bg-blue-dark">
        <h1 class="text-4xl text-yellow-dark py-5 px-8">
          Pokemon Master
        </h1>
      </header>
      <main class="flex-1 flex flex-row items-stretch">
        <Party />
        <PokeList />
      </main>
    </div>
  );
}

export default App;
