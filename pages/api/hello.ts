// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {prismaClient} from "@/src/server/db";
// import {client} from "@/src/server/db";

type Data = {
  name: string;
};


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data & any>,
) {

  // await prismaClient.users.create({data: {
  //   email: "test@.test.com",
  //   password: "1234",
  //     name: "ivolkov",
  //     age: "20",
  //   }})
  const users = await prismaClient.users.findMany();
  console.log("users >>> ", users)
  res.status(200).json({  hi: "hi" });

}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data & any>,
// ) {
//   const client = new PrismaClient()
//   const users = await client.users.findMany()
//   // console.log("users >>> ", users)
//   console.log("env >>> ", process.env.DATABASE_URL)
//   // await client.users.create({
//   //   data: {
//   //     name: "Иван",
//   //     email: "test@mail.test",
//   //     password: "1234"
//   //   }
//   // })
//   // const users = await usersEntity;
//   // Дальше вы можете работать с коллекцией users
//   // Например, добавить нового пользователя
//   // const newUser = { name: 'Иван', age: 31 };
//   // const result = await usersCollection.insertOne(newUser);
//   // const allUsers = await users.find().toArray();
//
//   // res.status(200).json({  allUsers });
//   res.status(200).json({  hi: "hi" });
//
// }

