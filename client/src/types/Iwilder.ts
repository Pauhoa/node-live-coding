import { NullLiteral } from "typescript";

export interface SkillOfWilder {
  id: number;
  name: string;
  votes: number;
}

export interface Iwilder {
  id: number;
  name: string;
  city: string | null;
  bio: string | null;
  skills: SkillOfWilder[];
}

export interface IwilderInput {
  name: string;
}
