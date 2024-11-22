export interface BeerRequestBody {
  name: string;
  description: string;
  abv: number;
  price: number;
  id_brewery: number;
}

export interface BeerResponseBody {
  id_beer: number;
  name: string;
  description: string;
  abv: number;
  price: number;
  id_brewery: number;
  created_at: Date;
  updated_at: Date;
}
