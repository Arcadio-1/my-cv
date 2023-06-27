import { NextRequest, NextResponse } from "next/server";
import { regexCheck } from "../util/functions/regexCheck";
import { getClient } from "../util/functions/getClient";

interface MyBody {
  name: string;
  email: string;
  message: string;
}
interface Message extends MyBody {
  date: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  const myBody: MyBody = await req.json();

  const testName = regexCheck(RegExp(/^\s*\S/), myBody.name);
  const testEmail = regexCheck(
    RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
    myBody.email
  );
  const testMessage = regexCheck(
    RegExp(/^\s*\S+(?:\s+\S+){1}/),
    myBody.message
  );
  if (!testName || !testEmail || !testMessage) {
    return NextResponse.json({
      status: 400,
    });
  }
  const data: Message = {
    name: myBody.name,
    email: myBody.email,
    message: myBody.message,
    date: new Date().toLocaleString(),
  };
  try {
    const client = await getClient("main");

    const db = client.db();
    const request = await db.collection("messages").insertOne(data);
    if (!request.insertedId) {
      return NextResponse.json({
        status: 500,
        message: "خطا در برقراری ارتباط",
      });
    }
    // console.log(request);
    return NextResponse.json({
      status: 200,
      message: "پیغام شما با موفقیت ارسال شد",
      data: request,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "خطا در برقراری ارتباط",
    });
  }
}
