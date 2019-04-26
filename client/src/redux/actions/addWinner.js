export const type = "addWinner";

const addWinner = gameId => {
  return {
    type,
    payload: gameId
  };
};

export default addWinner;
