// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string,
  status: number,
  token?: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const postResult = await fetch(process.env.API_ADDRESS+"/otp", {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const jsonData = await postResult.json();
    console.log(jsonData);

    if (jsonData.status === 0) {
      res.status(400).json({ message: jsonData.message, status: 0 });
    } else {
      res.status(200).json({ message: jsonData.message, status: 1, token: jsonData.token });
    }
  } else {
    res.status(200).json({ message: 'This API cannot be used with this method.', status: 0 });
  };
};
