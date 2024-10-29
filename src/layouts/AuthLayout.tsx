import { Outlet } from "react-router-dom";
import { Container } from "../components/ui/Container";

export default function AuthLayout() {
  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      <Container>
        <main className="flex-1 max-w-full overflow-x-hidden [&::-webkit-scrollbar]:w-0 scroll-smooth">
          <Outlet />
        </main>
      </Container>
    </div>
  );
}
