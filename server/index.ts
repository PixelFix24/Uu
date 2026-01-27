import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { handleDemo } from "./routes/demo";
import {
  handleAdminLogin,
  handleAdminLogout,
  handleAdminCheck,
  handleGetRepairRequests,
  handleSaveRepairRequest,
  handleUpdateRepairRequest,
  handleDeleteRepairRequest,
  handleGetCMSContent,
  handleSaveCMSContent,
} from "./routes/admin";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Admin Routes
  app.post("/api/admin/login", handleAdminLogin);
  app.post("/api/admin/logout", handleAdminLogout);
  app.get("/api/admin/check", handleAdminCheck);

  // Repair Requests Routes
  app.get("/api/admin/repair-requests", handleGetRepairRequests);
  app.post("/api/repair-requests", handleSaveRepairRequest);
  app.patch("/api/admin/repair-requests/:id", handleUpdateRepairRequest);
  app.delete("/api/admin/repair-requests/:id", handleDeleteRepairRequest);

  // CMS Routes
  app.get("/api/admin/cms", handleGetCMSContent);
  app.post("/api/admin/cms", handleSaveCMSContent);

  return app;
}
