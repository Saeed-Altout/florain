import { Outlet } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Sidebar } from "../components/common/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      <Container>
        <div className="flex flex-row h-full rounded-2xl gap-8">
          <Sidebar />
          <main className="flex-1 max-w-full overflow-x-hidden [&::-webkit-scrollbar]:w-0 scroll-smooth">
            <Outlet />
          </main>
        </div>
        <div className="flex justify-end items-center text-[#fff] py-1">
          <p className="text-sm font-medium font-fraunces">Copyright © 2024</p>
        </div>
      </Container>
    </div>
  );
}
