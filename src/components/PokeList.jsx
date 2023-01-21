import { For } from 'solid-js';
import { gen1 } from '../../assets/pokedex';
import Pokemon from './Pokemon.jsx';

const sortedPokedex = gen1.sort(({ name: nameA }, { name: nameB }) => {
  if (nameA.english < nameB.english) {
    return -1;
  }
  if (nameA.english > nameB.english) {
    return 1;
  }
  return 0;
});

export default function PokeList() {
  return (
    <div>
      <For each={sortedPokedex}>
        {({ id, name, types }) => <Pokemon id={id} name={name.english} types={types} />}
      </For>
    </div >
  );
}
