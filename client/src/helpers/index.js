export const compare = (playerOneWeapon, playerTwoWeapon) => {
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

export const hideSiblings = elem => {
  if (elem.previousSibling && elem.nextSibling) {
    elem.previousSibling.style.display = "none";
    elem.nextSibling.style.display = "none";
  } else if (elem.previousSibling) {
    elem.previousSibling.previousSibling.style.display = "none";
    elem.previousSibling.style.display = "none";
  } else {
    elem.nextSibling.nextSibling.style.display = "none";
    elem.nextSibling.style.display = "none";
  }
};

