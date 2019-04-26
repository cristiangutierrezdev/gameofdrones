export const type = "addWeapon";

const addWeapon = (playerId, weapon) => {
  return {
    type,
    payload: {playerId, weapon}
  };
};

export default addWeapon;
