import { Navbar } from "@/components/layout/Navbar";
import { authClient } from "@/lib/auth-client";

export default async function Home() {
  const user = await authClient.getSession()
  console.log('user :>> ', user);
  return (
    <div>
      Home Page!
    </div>
  );
}
