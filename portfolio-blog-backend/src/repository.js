import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$connect();

const userMap = await fetchAllUsers();

async function fetchAllTags() {
  const allTags = await prisma.tag.findMany();

  let tagMap = new Map();

  allTags.forEach((tag) => {
    tagMap.set(tag.name, tag);
  });

  return tagMap;
}

async function fetchAllUsers() {
  const allUsers = await prisma.user.findMany();

  let userMap = new Map();

  allUsers.forEach((user) => {
    userMap.set(user.email, user);
  });

  return userMap;
}

export async function createMissingTags(tags) {
  const tagMap = await fetchAllTags();

  const missingTags = [];

  for (let key in tags) {
    let tag = tags[key];
    if (!tagMap.has(tag)) {
      missingTags.push({
        name: tag,
      });
    }
  }

    await prisma.tag.createMany({ data: missingTags });

}

export async function uploadBlog(blogLocation, blogData) {

  const blog = {
    id: blogData.id,
    title: blogData.title,
    description: blogData.description,
    tags: {
      connectOrCreate : {
        create : {
          name: "first blog"
        },
        where : {
          id: "clu5girz60001mcsa1fp506pk"
        }
      }
    },
    blogSeries: 0,
    readingTime:"",
    userId : "",
  };

  await prisma.blog.upsert({
    create: blog,
    update: blog,
    where: {
      id: blogData.id
    }
  });
}
