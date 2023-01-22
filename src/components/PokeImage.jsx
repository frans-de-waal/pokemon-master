import { createMemo } from 'solid-js';

export default function PokeImage(props) {
  const foldersBySize = {
    sm: 'sprites',
    md: 'thumbnails',
    lg: 'images',
  };
  const imageSize = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
  };
  const normalisedId = createMemo(() => `${props.id}`.padStart(3, '0'));
  const imgSrc = createMemo(() => `/assets/${foldersBySize[props.size || 'md']}/${normalisedId()}.png`);
  return (
    <img class={`${imageSize[props.size || 'md']} object-contain`} src={imgSrc()} />
  );
}
