export interface Character {
  id: number;
  name: string;
  category?: string;
  description: string;
}


export interface CharacterSingle extends Character{
  image: string;
}


export interface CharacterMultiple extends Character {
  images: string[];
}