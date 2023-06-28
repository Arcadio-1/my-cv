import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(
    jsonDirectory + "/all-in-one.json",
    "utf8"
  );
  // console.log(fileContents);
  return NextResponse.json({ status: 200, data: fileContents });
}
