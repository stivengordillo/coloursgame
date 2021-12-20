const newColorGroup = [];
const playGame = () =>{
    const initialPoints = 0;
    const frontPoints = document.getElementById("points");
    frontPoints.innerHTML= initialPoints;
    randomNumber();
}
const playAction = () =>{
    const numberColors = newColorGroup.length;
    console.log(numberColors);
}
const randomNumber = () =>{
    const random = Math.floor(Math.random()*4);
    newColor(random);
};
const newColor= (ranNumber) => {
    newColorGroup.push(ranNumber);
    playAction();
}

playGame();



