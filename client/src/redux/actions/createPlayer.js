export const type = "createPLayer";

const createPlayer = player => {
  return {
    type,
    payload: player
  };
};

export default createPlayer