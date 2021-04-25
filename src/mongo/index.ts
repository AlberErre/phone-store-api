import mongoose, { Connection } from "mongoose";

export const mongoConnection = async (url: string): Promise<Connection> => {
  const { connection } = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!connection)
    throw new Error("An error ocurred while connecting to database.");

  console.log("Succesfully connected to Mongo database.");

  return connection;
};
