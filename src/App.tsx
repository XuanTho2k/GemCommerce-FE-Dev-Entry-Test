import EntryTest from "./components/EntryTest";
import "./style/global.css";

const App = () => {
  return (
    <div className="w-screen h-screen bg-neutral-950 flex items-center justify-center text-neutral-100">
      <div className="w-70 bg-[#151515] p-4 rounded-lg">
        <EntryTest />
      </div>
    </div>
  );
};

export default App;
