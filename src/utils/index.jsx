// Colourize text with theme color
export const textColorize = (strings) => {
  const text = strings.map((value, index) => {
    return (
      <span key={index} className={value.color ? "heading-primary" : ""}>
        {value.text}
      </span>
    );
  });
  return text;
};

// Shuffle blogs
export const shuffleArray = (array) => {
  // Create a copy of the input array
  const shuffledArray = [...array];

  // Shuffle the copy using the Fisher-Yates algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export const get_canonical = (location) => {
  return location.origin + location.pathname;
};

export const get_title_text = (title) => {
  let newTitle = "";
  for (const key in title) {
    newTitle += title[key].text;
  }
  return newTitle;
};
