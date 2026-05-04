import path from "path";

export const CONTENT_DIR = path.join(process.cwd(), "_content");
export const PAGES_DIR = path.join(CONTENT_DIR, "pages");
export const PROJECTS_DIR = path.join(CONTENT_DIR, "projects");
export const READING_DIR = path.join(CONTENT_DIR, "bookshelf");
export const WATCHING_DIR = path.join(CONTENT_DIR, "watching");
export const CONFIG_DIR = path.join(CONTENT_DIR, "config");
export const PHOTOS_DIR = path.join(process.cwd(), "public", "assets", "photos");
