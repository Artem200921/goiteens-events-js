import PropTypes from "prop-types";
import { PageBoard } from "./components/PageBoard";
import { Events } from "./components/Events";
import array from "./data/upcoming-events.json";

function App() {
  return (
    <div className="App">
      <PageBoard
        events={array.map((item, idx) =>
            <Events
              key={idx}
              name={item.name}
              time={item.time}
              location={item.location}
              speaker={item.speaker}
            />
        )}
      />
    </div>
  );
}
App.prototypes = {
  PageBoard: PropTypes.element.isRequired,
  Events: PropTypes.element.isRequired,
};

export default App;
