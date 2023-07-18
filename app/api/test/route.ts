// (app api route - https://nextjs.org/docs/app/building-your-application/routing/router-handlers)

import { NextApiRequest } from "next";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt_decode from "jwt-decode";

export async function GET(request: NextRequest) {
  const cookieStore = cookies();
  const kindeToken = cookieStore.get("kinde_token");
  // @ts-ignore
  const tokenValues = JSON.parse(kindeToken?.value);
  const idToken = jwt_decode(tokenValues.id_token);
  const accessToken = jwt_decode(tokenValues.access_token);

  return NextResponse.json({
    // @ts-ignore
    ...JSON.parse(kindeToken?.value),
    id_token_decoded: idToken,
    access_token_decoded: accessToken,
  });
}
