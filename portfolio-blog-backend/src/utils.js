import fs from "fs";
import path from "path";
import crypto from "crypto";
import { BLOG_FILE_NAME, BLOG_METADATA_NAME } from "./constants.js";
import matter from "gray-matter";
import semver from "semver";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import { v4 as uuidv4 } from "uuid";

dayjs.extend(utc);

export function getPathToAllBlog(baseDirectoryPath) {
  let files = fs.readdirSync(baseDirectoryPath);

  let blogs = files
    .filter((file) => isABlogDirectory(file))
    .map((blog) => path.join(baseDirectoryPath, blog));

  return blogs;
}

function isABlogDirectory(directoryName) {
  return directoryName.startsWith("Blog");
}

export function getAllUnprocessedBlogs(blogDirectoryPaths) {
  let unprocessedBlogs = [];
  let processedBlogs = [];

  blogDirectoryPaths.forEach((blogDirectoryPath) => {
    if (!isProcessedBlogs(blogDirectoryPath)) {
      unprocessedBlogs.push(blogDirectoryPath);
    } else {
      processedBlogs.push(blogDirectoryPath);
    }
  });
  return [unprocessedBlogs, processedBlogs];
}

function isProcessedBlogs(blogDirectoryPath) {
  let metadataPath = path.join(blogDirectoryPath, BLOG_METADATA_NAME);

  if (fs.existsSync(metadataPath)) {
    let metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
    let storedHash = metadata.hash;

    let blogPath = path.join(blogDirectoryPath, BLOG_FILE_NAME);
    const fileBuffer = fs.readFileSync(blogPath);
    const hashSum = crypto.createHash("sha256");
    hashSum.update(fileBuffer);
    const currentHash = hashSum.digest("hex");

    if (currentHash === storedHash) return true;
  }

  return false;
}

export function addMetaDataToBlog(blogDirectoryPath) {
  const metaData = prepareMetaDataForBlog(blogDirectoryPath);

  let metadataPath = path.join(blogDirectoryPath, BLOG_METADATA_NAME);

  fs.writeFile(metadataPath, JSON.stringify(metaData, null, 4), () => {});

  return metaData;
}

export function prepareMetaDataForBlog(blogDirectoryPath) {
  let metadataPath = path.join(blogDirectoryPath, BLOG_METADATA_NAME);

  const markdownFile = fs.readFileSync(
    path.join(blogDirectoryPath, BLOG_FILE_NAME),
    "utf-8",
  );

  const file = matter(markdownFile);

  let type = file.data.publish === " true" ? "major" : "prerelease";

  let now = dayjs();

  let metaData = {};
  if (fs.existsSync(metadataPath)) {
    metaData = JSON.parse(fs.readFileSync(metadataPath, "utf8"));

    if (metaData.publish === "true") {
      type = "patch";
    }

    // increment version
    metaData["version"] = metaData.version
      ? semver.inc(metaData.version, type, "", "")
      : "1.0.0";
  } else {
    metaData = {
      version: "1.0.0",
      createdAt: now.toString(),
      id: uuidv4(),
    };
  }

  metaData["title"] = file.data.title;
  metaData["description"] = file.data.description;
  metaData["tags"] = file.data.tags;
  metaData["authors"] = file.data.authors;
  metaData["publish"] = file.data.publish;
  metaData["blogSeries"] = file.data.series;
  metaData["url"] = file.data.url;

  metaData["updatedAt"] = now.utc().toString();

  let blogPath = path.join(blogDirectoryPath, BLOG_FILE_NAME);
  const fileBuffer = fs.readFileSync(blogPath);
  const hashSum = crypto.createHash("sha256");
  hashSum.update(fileBuffer);
  metaData["hash"] = hashSum.digest("hex");

  return metaData;
}
