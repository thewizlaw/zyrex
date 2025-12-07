// @ts-ignore
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AI E-Commerce Website Generator API",
      version: "1.0.0",
      description: "API documentation",
    },
  },

  // IMPORTANT: use absolute paths so Swagger can find your .ts files
  apis: [
    path.join(process.cwd(), "src/routes/*.ts"),
  ],
};

export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUiMiddleware = swaggerUi;
