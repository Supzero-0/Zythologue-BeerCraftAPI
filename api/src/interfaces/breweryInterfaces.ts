export interface BreweryRequestBody {
  name: string;
  country: string;
}

export interface BreweryResponseBody {
  id_brewery: number;
  name: string;
  country: string;
  created_at: Date;
  updated_at: Date;
}
