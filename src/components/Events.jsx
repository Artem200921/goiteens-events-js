import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { ItemContainer } from "./Items";

export const Events = ({ name, location, speaker, time }) => {
  const start = new Date(time.start);
  const end = new Date(time.end);
  const ms = end - start;
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms / (1000 * 60)) % 60);

  const date = new Date(time.start);

  const options = {
    month: "long",
  };

  return (
    <ItemContainer>
      <h2>{name}</h2>
      <div>
        <p>
          <IoLocationSharp />
          {location}
        </p>
        <p>
          <IoPersonSharp />
          {speaker}
        </p>
        <p>
          <FcCalendar />
          {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}{" "}
          {date.toLocaleString("en-GB", options)} {date.getFullYear()},{" "}
          {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
        <p>
          <FcClock />
          {hours > 0 ? `${hours} Hours` : ""}

          {minutes > 0 ? ` ${minutes} Minutes` : ""}
        </p>
      </div>
    </ItemContainer>
  );
};


Events.Prototypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  time: PropTypes.array.isRequired,
}