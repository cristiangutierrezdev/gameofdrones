export const compareChoices = (playerOneWeapon, playerTwoWeapon) => {
  const choices = `${playerOneWeapon} ${playerTwoWeapon}`;
  switch (choices) {
    case "Rock Scissors":
    case "Paper Rock":
    case "Scissors Paper":
      return 1;
    case "Rock Paper":
    case "Paper Scissors":
    case "Scissors Rock":
      return 2;
    case "Rock Rock":
    case "Paper Paper":
    case "Scissors Scissors":
      return 0;
    default:
      break;
  }
};
