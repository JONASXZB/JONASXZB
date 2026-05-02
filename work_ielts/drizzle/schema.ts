import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** External auth provider identifier. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Weekly international news table
export const weeklyNews = mysqlTable("weekly_news", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  content: text("content"),
  sourceUrl: varchar("sourceUrl", { length: 512 }),
  source: varchar("source", { length: 128 }), // e.g., "BBC", "Reuters", "CFR"
  category: varchar("category", { length: 64 }), // e.g., "Politics", "Economics", "Technology", "Science"
  region: varchar("region", { length: 64 }), // e.g., "Asia", "Europe", "Americas", "Global"
  englishLevel: mysqlEnum("englishLevel", ["Beginner", "Intermediate", "Advanced"]).default("Intermediate"),
  imageUrl: varchar("imageUrl", { length: 512 }),
  publishedAt: timestamp("publishedAt").notNull(),
  weekNumber: int("weekNumber").notNull(), // ISO week number
  year: int("year").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type WeeklyNews = typeof weeklyNews.$inferSelect;
export type InsertWeeklyNews = typeof weeklyNews.$inferInsert;

// TODO: Add your tables here