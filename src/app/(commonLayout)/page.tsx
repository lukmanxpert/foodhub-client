import { Carousel } from "@/components/modules/homepage/Carousel";
import { authService } from "@/services/auth.service";

export default async function Home() {
  const response = await authService.getSession();
  console.log("user from home:>> ", response);
  return (
    <div>
      <Carousel />
    </div>
  );
}
