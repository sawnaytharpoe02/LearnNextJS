import Count from "./components/Count";
import Menu from "./components/Menu";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Count />
      <Menu />
    </main>
  );
}
