import { Profile } from "./componets/profile/profile";
import { Project } from "./componets/projects/project";
import { Cursus } from "./componets/projects/project";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile />
      <Project />
      <Project />
      <Cursus />
    </div>
  );
}

export default App;
