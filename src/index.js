import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./Menu";
import reportWebVitals from "./reportWebVitals";

const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, mmeasurement: "lb" },
      { name: "Pine Nuts", amount: 1, mmeasurement: "cup" },
      { name: "Butter Lettuce", amount: 2, mmeasurement: "cups" },
      { name: "Yellow Squash", amount: 1, mmeasurement: "med" },
      { name: "Olive Oil", amount: 0.5, mmeasurement: "cup" },
      { name: "Garlic", amount: 3, mmeasurement: "cloves" },
    ],
    steps: [
      "Prehear the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the yellow squash place in the oven for 30 mins.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 mins.",
      "Remove from oven. Add the lettuce and serve.",
    ],
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, mmeasurement: "1 lb" },
      { name: "Cheese", amount: 1, mmeasurement: "cup" },
      { name: "Iceberg lettuce", amount: 2, mmeasurement: "cups" },
      { name: "Tomatoes", amount: 2, mmeasurement: "large" },
      { name: "Torillas", amount: 3, mmeasurement: "med" },
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "Plcae the fish on the 3 torillas.",
      "Top them with lettuce, tomatoes, and cheese.",
    ],
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.hydrate(
  <React.StrictMode>
    <Menu recipes={data} title="Delicious Recipes" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
