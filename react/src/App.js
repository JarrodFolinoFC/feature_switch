import './App.css';
import flagsmith from "flagsmith";
import { FlagsmithProvider, useFlags } from 'flagsmith/react';

function Component() {
    const flags = useFlags('new_tcs');
    const new_tcs = flags.new_tcs.enabled
    return <p>
        {new_tcs ? "New TCS" : "Old TCS"}
    </p>
}

function App() {
  return (
      <FlagsmithProvider
          options={{
            environmentID: 'QqkP4uKGR5zWKNhE6D8JAP',
          }}
          flagsmith={flagsmith}>
        <div className="App">
            <Component></Component>
        </div>
      </FlagsmithProvider>
  );
}

export default App;
