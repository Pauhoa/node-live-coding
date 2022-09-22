import { Iwilder, IwilderInput } from "../types/Iwilder";
import API from "./APIClient";

export async function getAllWilders(): Promise<Iwilder[]> {
  const { data } = await API.get("/wilders");
  return data;
}

export async function createWilder(wilderProps: IwilderInput) {
  return API.post("/wilders", wilderProps);
}

export async function deleteWilder(id: number) {
  return API.delete(`/wilders/${id}`);
}

export async function addSkillToWilder(wilderId: number, skillId: number) {
  return API.post(`/wilders/${wilderId}/skills`, { skillId });
}

export async function removeSkillFromWilder(wilderId: number, skillId: number) {
  return API.delete(`/wilders/${wilderId}/skills/${skillId}`);
}
