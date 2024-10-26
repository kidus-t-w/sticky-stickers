import { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { EdgeStoreProvider } from "../../../lib/edgestore";
import SideBar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard area",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token");

  if (!token) {
    return redirect("/auth");
  }
  return (
    <div className="flex gap-8">
      <SideBar />
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </div>
  );
}
