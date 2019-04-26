export const type = "createGame";

const createGame = Game => {
  return {
    type,
    payload: Game
  };
};

export default createGame