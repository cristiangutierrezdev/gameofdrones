export const type = "createGame";

const createGame = players => {
  return {
    type,
    payload: {
      players
    }
  };
};

export default createGame;
