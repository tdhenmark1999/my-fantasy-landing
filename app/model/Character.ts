export interface Character {
  id: number;
  category?: string;
  description: string;
}


export interface CharacterSingle extends Character{
  name: string;
  image: string;
}


export interface CharacterMultiple extends Character {
  title: string;
  images: string[];
}