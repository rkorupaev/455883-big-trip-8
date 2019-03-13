const makeArrayOfTitles = () => {
  let finalTitle = [];
  const initialString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
  let arrayOfTitles = initialString.split(`. `);
  arrayOfTitles.slice(0, -1);
  for (let i = 0; i < getRandomNumber(1, 3); i++) {
    finalTitle = finalTitle + arrayOfTitles[getRandomNumber(0, 11)]
  };
  return finalTitle;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const point = {
  icon: `taxi`,
  title: makeArrayOfTitles(),
  time: {
    timetable: `10:00 - 11:00`,
    duration: `1H30`,
  },
  price: `20`,
  offer: new Set([`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`]),
};

