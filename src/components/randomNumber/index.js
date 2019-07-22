const getRandomNumber = totalPlanets => {
  const min = Math.ceil(1);
  const max = Math.floor(totalPlanets);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomNumber;
