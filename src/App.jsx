import React, { useState } from "react";
import "./index.css";

var emojiDictionary = {
  "🤺": "Fencing",
  "⛷️": "Skiing",
  "🏌️‍♂️": "Golf",
  "🚣": "Boat Rowing",
  "🏄": "surfing",
  "🏂": "snow boarder",
  "🏊": "swimming",
  "⛹️": "basketball",
  "🏋️": "weight-lifling",
  "🚴": "cycling",
  "🚵": "Mountain-Biking",
  "🤸": "Cartwheel",
  "🤼": "wrestleing",
  "🤽": "water polo",
  "🤾": "handball",
  "🤹": "jugling",
  "🧘": "youga",
  "🧗": "wall climbing",
  "🏇": "horse riding",
  "⚽": "football",
  "🥊": "boxing",
  "🏓": "table tennis",
  "🥋": "martial arts",
  "🎱": "pool",
  "🎮": "Video game",
  "♟️": "Chess",
  "🏏": "Cricket",
  "🏐": "volleyball",
  "😀": "Smiling",
  "😂": "Laughing with tears of joy",
  "🥰": "smiling face with hearts",
  "🤑": "money-mouth face",
  "😑": "annoyance",
  "😳": "Disbelief",
  "😔": "sad",
  "❤️": "love",
  "🥡": "Take-out food box",
  "😍": "In love of",
  "😇": "doing good deeds",
  "😘": "conveys feelings of love and affection",
  "😜": " fun, excitement, wackiness, or joking.",
  "😐": "neutral",
  "😒": "displeasure, grumpiness, or skepticism",
  // "": "",
  // "": "",
  // "": "",
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function userInputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry this one is not in database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="header">Sport-emoji</h1>
      <p className="para">Enter below an emoji to know its Meaning</p>

      <input
        onChange={function () {
          return userInputHandler(event);
        }}
      ></input>

      <div className="meaning"> "{meaning}" </div>
      <h2 className="dataHeader">Emojis our database supports.</h2>

      <div className="divDisplayEmoji">
        {emojis.map(function (item) {
          return (
            <span
              key={item}
              onClick={function () {
                return emojiClickHandler(item);
              }}
              className="displayEmojis"
            >
              {" "}
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
