import { PATH_TO_BLOG_DIR } from "./constants.js";
import clc from "cli-color";

import {
  addMetaDataToBlog,
  getAllUnprocessedBlogs,
  getPathToAllBlog,
} from "./utils.js";
import { createMissingTags, uploadBlog } from "./repository.js";

const main = async () => {
  let paths = getPathToAllBlog(PATH_TO_BLOG_DIR);

  let [unprocessedBlogs, processedBlogs] = getAllUnprocessedBlogs(paths);

  console.log(clc.green.bold("Up to date blogs"), processedBlogs);
  console.log(clc.red.bold("To be processed blogs"), unprocessedBlogs);

  if (unprocessedBlogs.length > 0) {
    let blogsForUpload = [];

    unprocessedBlogs.forEach((unprocessedBlog) => {
      const metadata = addMetaDataToBlog(unprocessedBlog);
      blogsForUpload.push({
        path: unprocessedBlog,
        metadata: metadata,
      });
    });

    let allTags = [];

    for (let key in blogsForUpload) {
      let data = blogsForUpload[key];
      allTags = [...allTags, ...data.metadata.tags];
    }

    console.log(allTags);

    await createMissingTags(allTags);

    blogsForUpload.forEach(blogData => uploadBlog(blogData.path,blogData.metadata));
  }
};

export default main;
