import type { Express } from "express";
import express from "express";
import path from "node:path";

export function registerStorageProxy(app: Express) {
  app.use("/uploads", express.static(path.resolve(process.cwd(), "uploads")));
}
