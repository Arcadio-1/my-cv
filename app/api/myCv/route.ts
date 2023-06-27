// import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getClient } from "../util/functions/getClient";

export async function GET() {
  // console.log("working");
  const client = await getClient("main");
  if (!client) {
    throw new Error("field at get client");
  }
  const db = client.db();
  const request = await db.collection("my_cv").find().toArray();
  // console.log(request);
  if (!request) {
    throw new Error("insert faild");
  }
  return NextResponse.json({ status: "success", data: request });
}
