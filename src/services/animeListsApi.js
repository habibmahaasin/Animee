import { handleApiRequest } from "./base/handleApiRequest";

export function getAnimeListsApi(query) {
  return handleApiRequest(
    "get",
    `/anime?page[limit]=${query.limit}&page[offset]=${query.offset}`,
    {}
  );
}

export function getAnimeDetailApi(id) {
  return handleApiRequest("get", `/anime/${id}`, {});
}
