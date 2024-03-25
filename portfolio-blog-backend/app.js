import dotenv from "dotenv";
import showBanner from "node-banner";
import main from "./src/main.js";

await showBanner("Blog Processor", "For processing the blogs");

// Set up the environment variable
dotenv.config();

// initiate the functionality
main();
