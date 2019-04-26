export const type = "incRound";

const incRound = gameId => {
  return {
    type,
    payload: gameId
  };
};

export default incRound;
