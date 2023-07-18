// (pages api route - https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

import jwt_decode from "jwt-decode";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const kindeToken = req.cookies.kinde_token;
  // @ts-ignore
  const tokenValues = JSON.parse(kindeToken);
  const idToken = jwt_decode(tokenValues.id_token);
  const accessToken = jwt_decode(tokenValues.access_token);

  res.status(200).json({
    // @ts-ignore
    ...JSON.parse(kindeToken),
    id_token_decoded: idToken,
    access_token_decoded: accessToken,
  });
}
