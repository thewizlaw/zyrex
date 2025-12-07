import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import authRoutes from "./routes/auth.routes";
import projectRoutes from "./routes/project.routes";
import pageRoutes from "./routes/page.routes";
import generationRoutes from "./routes/generation.routes";
import templateRoutes from "./routes/template.routes";
import utilityRoutes from "./routes/utility.routes";
import { errorHandler } from "./middleware/error.middleware";
import { swaggerSpec, swaggerUiMiddleware } from "./config/swagger";

dotenv.config();

const app = express();
connectDB();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json({ limit: "100mb" }));

// Swagger Documentation
app.use("/api-docs", swaggerUiMiddleware.serve, swaggerUiMiddleware.setup(swaggerSpec));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api", templateRoutes);      // NEW: Template routes
app.use("/api", projectRoutes);
app.use("/api", pageRoutes);
app.use("/api", generationRoutes);
app.use("/api", utilityRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║   🚀 COSMIC AI Website Generator v4.0                     ║
║   📡 Server: http://localhost:${PORT}                         ║
║   📚 API Docs: http://localhost:${PORT}/api-docs             ║
║   🗄️  Database: MongoDB Connected ✅                        ║
║   🎨 Template System: Multi-Category ✅                    ║
║   📦 11 Categories | Multiple Templates                   ║
╚════════════════════════════════════════════════════════════╝
    `);
});

export default app;