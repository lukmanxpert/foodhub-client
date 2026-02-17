import { authService } from "@/services/auth.service";

export default async function Home() {
  const response = await authService.getSession();
  console.log("user :>> ", response);
  return <div>Home Page!</div>;
}
