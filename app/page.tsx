"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, isAuthenticated, user, getToken } = useKindeAuth();

  const handleGetTokenHello = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    console.log(data);
    // alert(JSON.stringify(data, null, 2));
  };

  const handleGetTokenTest = async () => {
    const res = await fetch("/api/test");
    const data = await res.json();
    alert(JSON.stringify(data, null, 2));
  };

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
            href={{ pathname: "/api/auth/login" }}
          >
            Login
          </Link>
          <Link
            prefetch={false}
            className="btn-primary"
            href={{ pathname: "/api/auth/register" }}
          >
            Register
          </Link>
        </div>
      ) : (
        <>
          <div>
            <button className="btn-secondary mr-4" onClick={handleGetTokenTest}>
              get token (api/test)
            </button>
            <button className="btn-secondary" onClick={handleGetTokenHello}>
              get token (api/hello)
            </button>
          </div>
          <pre className="p-10 text-sm rounded-lg font-mono bg-gray-800 text-green-300 font-light">
            {JSON.stringify(user, null, 2)}
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
