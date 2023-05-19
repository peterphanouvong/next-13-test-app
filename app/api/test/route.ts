// (app api route - https://nextjs.org/docs/app/building-your-application/routing/router-handlers)

import { NextApiRequest } from "next";
import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";
import jwt_decode from "jwt-decode";

export async function GET(request: NextApiRequest) {
  const cookieStore = cookies();
  const kindeToken = cookieStore.get("kinde_token");
  const tokenValues = JSON.parse(kindeToken?.value);
  const idToken = jwt_decode(tokenValues.id_token);
  const accessToken = jwt_decode(tokenValues.access_token);

  return NextResponse.json({
    ...JSON.parse(kindeToken?.value),
    id_token_decoded: idToken,
    access_token_decoded: accessToken,
  });
}
