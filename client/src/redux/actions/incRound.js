export const type = "incRound";

const incRound = (gameId,round) => {
  return {
    type,
    payload: {gameId,round}
  };
};

export default incRound;
