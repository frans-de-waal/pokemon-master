export default function TypeLabel(props) {
  const bgColors = {
    Bug: 'bg-types-Bug',
    Dark: 'bg-types-Dark',
    Dragon: 'bg-types-Dragon',
    Electric: 'bg-types-Electric',
    Fairy: 'bg-types-Fairy',
    Fighting: 'bg-types-Fighting',
    Fire: 'bg-types-Fire',
    Flying: 'bg-types-Flying',
    Ghost: 'bg-types-Ghost',
    Grass: 'bg-types-Grass',
    Ground: 'bg-types-Ground',
    Ice: 'bg-types-Ice',
    Normal: 'bg-types-Normal',
    Poison: 'bg-types-Poison',
    Psychic: 'bg-types-Psychic',
    Rock: 'bg-types-Rock',
    Steel: 'bg-types-Steel',
    Water: 'bg-types-Water',
  };

  return (
    <div
      class={`
        my-2
        mr-3
        py-1
        px-2
        text-xs
        rounded
        text-white
        ${bgColors[props.type]}
        uppercase
      `}
    >
      {props.type}
    </div>
  );
}
