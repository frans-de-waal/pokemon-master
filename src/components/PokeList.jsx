import {
  createMemo, createSignal, For,
} from 'solid-js';
import { gen1 } from '../../assets/pokedex';
import Pokemon from './Pokemon.jsx';

export default function PokeList() {
  const [gen1Pokedex] = createSignal(gen1);

  const [search, setSearch] = createSignal('');

  const sortedPokedex = createMemo(
    () => gen1Pokedex().sort(({ name: nameA }, { name: nameB }) => {
      if (nameA.english < nameB.english) {
        return -1;
      }
      if (nameA.english > nameB.english) {
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
    <div>
      <input class="mb-10 py-2 px-3 rounded border-2 border-black" value={search()} type="text" onInput={(event) => setSearch(event.target.value)} />
      <For each={filteredPokedex()}>
        {({ id, name, types }) => <Pokemon id={id} name={name.english} types={types} />}
      </For>
    </div >
  );
}
