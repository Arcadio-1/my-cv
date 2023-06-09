import path from "path";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/all-in-one.json",
    "utf8"
  );
  //Return the content of the data file in json format
  return NextResponse.json(
    { status: 200, data: fileContents },
    { status: 404 }
  );
  // res.status(200).json(fileContents);
}
