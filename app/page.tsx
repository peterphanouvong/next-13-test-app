"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const {
    isLoading,
    isAuthenticated,
    user,
    getToken,
    getPermissions,
    getFlag,
  } = useKindeAuth();

  const [accessToken, setAccessToken] = useState();

  const handleGetTokenHello = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    setAccessToken(jwtDecode(data.access_token));
    // alert(JSON.stringify(data, null, 2));
  };

  const handleGetTokenTest = async () => {
    const res = await fetch("/api/test");
    const data = await res.json();
    alert(JSON.stringify(data, null, 2));
  };

  const handleGetPermissions = () => {
    console.log(getPermissions());
  };

  const handleGetFeatureFlags = () => {
    console.log(getFlag);
    console.log(getFlag("create:event"));
  };

  if (isLoading)
    return (
      <main className="flex min-h-screen flex-col gap-10 items-center justify-center p-24">
        Loading...
      </main>
    );

  if (!isLoading && !isAuthenticated && pathname != "/") {
    return router.push("/");
  }

  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-center p-24">
      {!isAuthenticated ? (
        <div>
          <Link
            prefetch={false}
            className="btn-primary mr-2"
            href={{
              pathname: "/api/auth/login",
            }}
          >
            Login
          </Link>

          <Link
            prefetch={false}
            className="btn-primary"
            href={{
              pathname: "/api/auth/register",
              query: {},
            }}
          >
            Register
          </Link>

          <Link
            prefetch={false}
            className="btn-primary"
            href={{
              pathname: "/api/auth/create_org",
              query: {
                org_name: "Hello world 19",
              },
            }}
          >
            Create org
          </Link>
        </div>
      ) : (
        <>
          <div>
            <button className="btn-secondary mr-4" onClick={handleGetTokenTest}>
              get token (api/test)
            </button>
            <button
              className="btn-secondary mr-4"
              onClick={handleGetTokenHello}
            >
              get token (api/hello)
            </button>
            <button className="btn-secondary" onClick={handleGetPermissions}>
              get permissions
            </button>
            <button className="btn-secondary" onClick={handleGetFeatureFlags}>
              get ff
            </button>
          </div>
          <pre className="p-10 text-sm rounded-lg font-mono bg-gray-800 text-green-300 font-light">
            {JSON.stringify(user, null, 2)}
            {accessToken ? JSON.stringify(accessToken, null, 2) : null}
          </pre>
          <Link
            prefetch={false}
            className="btn-primary"
            href={{ pathname: "/api/auth/logout" }}
          >
            Logout
          </Link>
        </>
      )}
    </main>
  );
}
