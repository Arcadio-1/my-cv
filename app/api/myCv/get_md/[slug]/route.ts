import path, { join } from "path";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import matter from "gray-matter";

export async function GET(req: NextRequest) {
  //Find the absolute path of the json directory
  const slug = req.url.split("/");
  const me = slug[slug.length - 1];
  const directory = path.join(process.cwd(), "markdown");
  const fullPath = join(directory, `${me}.md`);

  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  //Return the content of the data file in json format
  return NextResponse.json({ status: 200, data: content });
  // res.status(200).json(fileContents);
}
