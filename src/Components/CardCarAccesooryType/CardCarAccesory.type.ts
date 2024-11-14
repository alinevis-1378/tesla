export type CardCarAccesory = {
  id : number,
  FeaturedProducts: Array<string | { image: string; titr: string; price: number }>;
  FloorMats: Array<string | { image: string; titr: string; price: number }>;
  Interior: Array<string | { image: string; titr: string; price: number }>;
  Exterior: Array<string | { image: string; titr: string; price: number }>;
  Vault: Array<string | { image: string; titr: string; price: string }>;
  WheelsandTires: Array<string | { image: string; titr: string; price: number }>;
  Parts: Array<string | { image: string; titr: string; price: number }>;
  Keys: Array<string | { image: string; titr: string; price: number }>;
  model: string;
  image : string,
  titr: string,
  price : number,
    }