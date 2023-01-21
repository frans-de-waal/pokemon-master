import { For } from 'solid-js';
import PokeImage from './PokeImage.jsx';
import TypeLabel from './TypeLabel.jsx';

export default function Pokemon(props) {
  return (
    <div class="flex flex-col mb-4">
      <h3 class="flex flex-row content-center text-xl">
        <span>{props.name}</span>
        <PokeImage id={props.id} size="xs" />
      </h3>
      <div class="flex flex-row">
        <For each={props.types}>{(type) => <TypeLabel type={type} />}</For>
      </div>
    </div>
  );
}
