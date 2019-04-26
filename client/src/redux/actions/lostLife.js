export const type = "lostLife";

const lostLife = playerId => {
  return {
    type,
    payload: playerId
  };
};

export default lostLife