export class Person {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number | null;
  id: number;
  name: string;
  order: number;
  profile_path: string | null;
  department?: string;
  job?: string;

  birthday?: string | null;
  known_for_department?: string;
  deathday?: null | string;
  also_known_as?: string[];
  biography?: string;
  popularity?: number;
  place_of_birth?: string | null;
  adult?: boolean;
  imdb_id?: string;
  homepage?: null | string;
}
