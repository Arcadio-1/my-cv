import { MongoClient } from "mongodb";
import { json } from "stream/consumers";

export const getClient = async (databaseName: string) => {
  try {
    const client = await MongoClient.connect(
      `${process.env.Next_APP_MONGODB}${databaseName}?retryWrites=true&w=majority`
    );
    return client;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        status: "504",
        tittle: "خطا",
        message: "خطا در برقراری ارتباط",
      })
    );
  }
};
