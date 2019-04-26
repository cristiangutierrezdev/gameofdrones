export const type = "createPLayers";

const createPlayers = players => {
  return {
    type,
    payload: players
  };
};

export default createPlayers