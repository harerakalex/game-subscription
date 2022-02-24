export const isObjectEmpty = (obj: Object) => {
  return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
};

export const getGameIncome = (subscription: number) => {
  const ROI = 3.5;
  const numberOfGames = 4;

  // formula income = ((subscription * ROI)/100)/numberOfGames
  const income = (subscription * ROI) / 100 / numberOfGames;

  return income;
};
