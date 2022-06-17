import { title } from "process"
import { Movie, character, character, GENDER } from './types';
export const movies: Movie[] = [
  {
    id: 1,
    title: "X-man O filme",
    year: 2000,
  },
  {
    id: 2,
    title: "DeadPool",
    year: 2016,
  }
]

export const character:character[]=[
     {
        id:1,
        name:"Storm",
        gender:GENDER.OTHER,
        
    },
    {
        id:2,
        name:"DeadPool",
        gender:GENDER.OTHER,
        description?:"Sexy MotherF***"
    },
    {
        id:3,
        name:"Colossus",
        gender:GENDER.MALE,
    },
]