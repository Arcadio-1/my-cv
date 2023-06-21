import { MongoClient } from "mongodb";

export const getClient = async (databaseName: string) => {
  try {
    const client = await MongoClient.connect(
      `${process.env.Next_APP_MONGODB}${databaseName}?retryWrites=true&w=majority`
    );
    return client;
  } catch (error) {
    throw new Error("خطا در برقراری ارتباط");
  }
};
