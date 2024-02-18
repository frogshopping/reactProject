import {
  PariNaComponent,
  AgeComponent,
  TodoComponent,
} from "./examples/component";
import { GenerateCatFactComponent } from "./examples/generateCatFact";
import { RegistrationComponent } from "./examples/registration";

import "./App.css";

// import { RouterComponent } from './page/routes';

function App() {
  return (
    <div className="App">
      <PariNaComponent />
      <AgeComponent />
      <TodoComponent />
      <GenerateCatFactComponent />
      <RegistrationComponent />
      {/* <RouterComponent/> */}
    </div>
  );
}

export default App;
