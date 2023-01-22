import { createMemo, createSignal } from 'solid-js';
import { gen1 } from '../../assets/pokedex';

const [partyIds, setPartyIds] = createSignal([]);

const party = createMemo(() => partyIds().map((partyId) => gen1.find(({ id }) => id === partyId)));

const remove = (id) => {
  setPartyIds(partyIds().filter((partyId) => id !== partyId));
};

const add = (id) => {
  const newPartyIds = partyIds().filter((partyId) => id !== partyId);
  newPartyIds.push(id);
  setPartyIds(newPartyIds);
};

export {
  add,
  remove,
  party,
};
