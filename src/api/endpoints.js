const API_KEY = "7f7c8e14-8784-4c0d-8a33-ff2e20052365";

export function getNewsCategoriesEndpoint(
  category,
  pageNumber = 1,
  pageSize = 20
) {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;

  return `https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  return `https://content.guardianapis.com/${newsId}${queryParams}`;
}
