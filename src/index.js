//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Evening = blue.
const greetings = {
  morning: {
    emoji: "🌄",
    greeting: "Good morning!",
    color: "red"
  },
  afternoon: {
    emoji: "☀️",
    greeting: "Good afternoon!",
    color: "green"
  },
  evening: {
    emoji: "🌙",
    greeting: "Good evening!",
    color: "blue"
  }
};

var choice = "";
var timeOfDay = new Date().getHours();
console.log();
if (timeOfDay > 0 && timeOfDay <= 12) {
  choice = greetings.morning;
} else if (timeOfDay > 12 && timeOfDay <= 18) {
  choice = greetings.afternoon;
} else {
  choice = greetings.evening;
}

ReactDOM.render(
  <h1 style={{ color: choice.color }}>
    {choice.greeting} {choice.emoji}
  </h1>,
  document.getElementById("root")
);
