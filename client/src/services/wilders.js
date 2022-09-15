import API from "./APIClient";

export async function getAllWilders() {
  const { data } = await API.get("/wilders");
  return data;
}

export async function createWilder(wilderToCreate) {
  return API.post("/wilders", wilderToCreate);
}
