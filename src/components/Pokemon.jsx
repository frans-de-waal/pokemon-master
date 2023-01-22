import { createMemo, For } from 'solid-js';
import PokeImage from './PokeImage.jsx';
import TypeLabel from './TypeLabel.jsx';
import TYPES, { MATCHUPS } from '../../assets/types';

export default function Pokemon(props) {
  const sortedTypes = createMemo(() => props.types.sort((typeA, typeB) => {
    if (typeA < typeB) {
      return -1;
    }
    if (typeA > typeB) {
      return 1;
    }
    return 0;
  }));

  const offence = createMemo(() => {
    const offenceValue = props.types.reduce((total, pokemonType) => {
      const typeMatchups = Object.values(MATCHUPS[pokemonType]);
      return total + typeMatchups.reduce((subTotal, matchupValue) => subTotal + matchupValue, 0);
    }, 0) / Object.keys(TYPES).length;
    return ((offenceValue - 0.8) * 100).toFixed(0);
  });

  const defence = createMemo(() => {
    const defenceValue = props.types.reduce((total, pokemonType) => {
      const allTypes = Object.values(TYPES);

      return total + allTypes.reduce((subTotal, type) => subTotal + MATCHUPS[type][pokemonType], 0);
    }, 0) / Object.keys(TYPES).length;
    return ((1.2 - defenceValue) * 100).toFixed(0);
  });

  return (
    <div
      class="
        flex
        flex-col
        p-2
        mb-3
        rounded
        cursor-pointer
      hover:bg-blue
      hover:text-yellow-dark
      "
      onClick={() => props.onClick()}
    >
      <div class="flex flex-row items-center">
        <PokeImage id={props.id} size="md" />
        <span class="flex-1 ml-3 text-xl">{props.name}</span>
        <span class="text-xs text-red-dark">{offence()}</span>
        <span class="text-xs text-black">
          &nbsp;-&nbsp;
        </span>
        <span class="text-xs text-blue-dark">{defence()}</span>
      </div>
      <div class="flex flex-row">
        <For each={sortedTypes()}>{(type) => <TypeLabel type={type} />}</For>
      </div>
    </div>
  );
}
