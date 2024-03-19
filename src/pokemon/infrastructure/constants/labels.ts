export const labels = {
  responses: {
    badGateway: "Bad Gateway",
    internalError: "Internal Server Error",
    notFound: "Not found",
    unknown: "Unknown Error",
  },
  errors: {
    database: {
      connection: "database connection failed",
      save: "Error saving new item:",
      deleteId: "Error deleting item by id:",
      deleteName: "Error deleting item by name:",
      list: "Error listing items:",
    },
    fetch: "Error fetching",
    pokeApi: "Pokemon not found",
    cors: "Not allowed by CORS",
  },
  validations: {
    name: {
      required: "Pokemon name is required",
      invalid: "Invalid Pokemon name",
    },
    identifier: {
      required: "Pokemon identifier is required",
      id: "Invalid Pokemon id",
      group: "At least one valid Pokemon identifier must be provided",
    },
  },
  init: "Server running on port",
};

export default Object.freeze(labels);
