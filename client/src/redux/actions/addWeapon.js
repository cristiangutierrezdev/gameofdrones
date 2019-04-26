export const type = "addWeapon";

const addWeapon = weapon => {
  return {
    type,
    payload: weapon
  };
};

export default addWeapon;
