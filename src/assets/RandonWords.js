let Programming_Language = [
    "pizza",
    "ramen",
    "sushi",
    "donut",
    "chickenSalad",
    "pie",
    "roast Pork",
    "steak",
    "sandWich",
    "pea",
    "crackers",
    "fruit",
    "applecrumble",
    "blueberry",
    "shortbread",
    "bread",
    "chips",
    "coconot",
    "lemon",
    "apple",
  ];
  
  function randomWord() {
    return Programming_Language[
      Math.floor(Math.random() * Programming_Language.length)
    ];
  }
  
  export { randomWord };