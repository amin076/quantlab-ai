import DashboardLayout from "../layouts/DashboardLayout";
import AppRouter from "./router";

export default function App() {
  return (
    <DashboardLayout>
      <AppRouter />
    </DashboardLayout>
  );
}