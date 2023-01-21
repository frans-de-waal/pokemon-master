import { createMemo, For } from 'solid-js';
import PokeImage from './PokeImage.jsx';
import TypeLabel from './TypeLabel.jsx';

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

  return (
    <div class="flex flex-col mb-6">
      <h3 class="flex flex-row flex-wrap items-center text-xl">
        <PokeImage id={props.id} size="md" />
        <span class="ml-3">{props.name}</span>
      </h3>
      <div class="flex flex-row">
        <For each={sortedTypes()}>{(type) => <TypeLabel type={type} />}</For>
      </div>
    </div>
  );
}
