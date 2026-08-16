import AppRouter from "./router/AppRouter";

type Props = {};

function App({}: Props) {
  return (
    <div className="min-h-screen w-full bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-200">
      <AppRouter />
    </div>
  );
}

export default App;
