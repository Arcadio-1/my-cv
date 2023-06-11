import { NextRequest } from "next/server";
import { getClient } from "../../functions/getClient";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { items, serverName, collectionName } = body;

  const client = await getClient(serverName);
  console.log(client);
  if (!client) {
    throw new Error("field at get client");
  }
  const db = client.db();
  const options = { ordered: true };
  const result = await db.collection(collectionName).insertMany(items, options);
  if (!result) {
    throw new Error("insert faild");
  }
  return new Response(JSON.stringify({ message: "success", result: result }), {
    status: 404,
  });
  // res.status(200).json({ message: "success", result: result });
}
