import { For } from 'solid-js';
import { party, remove } from './party';
import Pokemon from './Pokemon.jsx';
import H2 from './H2.jsx';

export default function Party() {
  return (
    <div class="flex-1 overflow-auto p-4">
      <H2>Party</H2>
      <For each={party()}>
        {
          ({ id, name, types }) => <Pokemon
            onClick={() => {
              // eslint-disable-next-line no-alert,no-restricted-globals
              if (confirm(`Are you sure you want to remove ${name.english} from your party?`)) {
                remove(id);
              }
            }}
            id={id}
            name={name.english}
            types={types}
          />
        }
      </For>
    </div >
  );
}
