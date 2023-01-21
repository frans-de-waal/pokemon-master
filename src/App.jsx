import PokeList from './components/PokeList.jsx';

function App() {
  return (
    <div class="bg-white min-h-screen max-h-screen flex flex-col font-poke">
      <header class="bg-blue-dark">
        <h1 class="text-4xl text-yellow-dark p-10">
          Pokemon Master
        </h1>
      </header>
      <section class="flex-1 overflow-y-scroll p-6">
        <PokeList />
      </section>
    </div>
  );
}

export default App;
