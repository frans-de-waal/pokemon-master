import {
  createMemo, createSignal, For,
} from 'solid-js';
import { gen1 } from '../../assets/pokedex';
import H2 from './H2.jsx';
import { add } from './party';
import Pokemon from './Pokemon.jsx';

export default function PokeList() {
  const [gen1Pokedex] = createSignal(gen1);

  const [search, setSearch] = createSignal('');

  const sortedPokedex = createMemo(
    () => gen1Pokedex().sort(({ id: idA }, { id: idB }) => {
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    }),
  );

  const filteredPokedex = createMemo(
    () => {
      const searchRegex = new RegExp(search(), 'i');
      return sortedPokedex().filter(({ name }) => !search() || name.english.match(searchRegex));
    },
  );

  return (
    <section class="flex-auto flex flex-col p-4">
      <H2>Pokedex</H2>
      <input
        class="mb-10 py-2 px-3 rounded border-2 border-black"
        value={search()}
        type="text"
        onInput={(event) => setSearch(event.target.value)}
        placeholder="Search for a Pokemon..."
      />
      <div class="flex-auto h-0 overflow-y-auto">
        <For each={filteredPokedex()}>
          {
            ({ id, name, types }) => <Pokemon
              onClick={() => add(id)}
              id={id}
              name={name.english}
              types={types}
            />
          }
        </For>
      </div>
    </section >
  );
}
