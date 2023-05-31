// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from "modules/utils/dbConnection";

type Data = {
  result: string,
  status: number
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();
  if (req.method === 'POST') {
    console.log(req.body);
    res.status(200).json({ result: req.body, status: 1 });
  } else {
    res.status(200).json({ result: 'This API cannot be used with this method.', status: 0 });
  };
};
