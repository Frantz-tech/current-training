/**
 * Configuration de swagger
 */
export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api de gestion de bibliothèque",
      version: "1.0.0",
      description: "Documentation de l'API avec Swagger",
    },

    servers: [
      {
        url: "http://localhost:3000",
      },
    ],

    paths: {
      "api/livres": {
        get: {
          summary: "Récuperer la liste des livres",
        },
        tags: ["livres"],
        responses: {
          200: {
            description: "Liste des livres récupérée avec succès",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: {
                        type: "integer",
                      },
                      titre: {
                        type: "string",
                      },
                      nb_pages: {
                        type: "number",
                      },
                      annee_publication: {
                        type: "string",
                      },
                      uniquement_sur_place: {
                        type: "boolean",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: [],
};

export default options;
