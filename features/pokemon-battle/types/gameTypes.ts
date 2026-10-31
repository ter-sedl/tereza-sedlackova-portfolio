export type PokemonSpecies = {
  name: string;
  url: string;
};

export type Pokemon = {
  name: string;
  types: string[];
  image: string;
};

export type EnemyPokemon = {
  name: string;
  types: string[];
  image: string;
  defeatedBy: string[],
};

export type PokeType = {
  slot: number;
  type: { name: string; url: string };
};

export type DamageRelations = {
  type: string;
  doubleDamageFrom: string[];
};

export type CardType = {
  name: string;
  types: string[];
  image: string;
  isWinner: boolean;
}

export type CardProps = {
  name: string;
  types: string[];
  image: string;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  afterGameDisable?: boolean;
  isWinner?: boolean;
  size?: "normal" | "large";
  dragabble?: boolean;
  hasHoover: boolean;
  onClick?: () => void;
};

export type PokemonChoicesProps = {
  options: CardType[];
  onDragStart: (pokemon: CardType) => void;
  onDragEnd?: () => void;
  onClick: (pokemon: CardType) => void;
};

export type BattleFieldProps = {
  enemy: EnemyPokemon | null;
  selectedPokemon: CardType | null;
  onDrop: () => void;
  dragging: CardType;
  handleResults: () => void;
  prepareGame: () => void;
};

export type BattleButtonType = {
  handleResults: () => void;
  prepareGame: () => void;
}

export type GameStatus = "playing" | "won" | "lost";