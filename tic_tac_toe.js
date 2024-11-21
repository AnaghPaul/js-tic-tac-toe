const DASH = '━';
const PLUS = '╋';
const LINE = '┃';
const CROSS = '❌';
const CIRCLE = '⭕';

const PLAYERMARK = doesPlayerWantCross() ? CROSS : CIRCLE;
const COMPUTERMARK = PLAYERMARK === CROSS ? CIRCLE : CROSS;

let a1 = ' 1';
let a2 = ' 2';
let a3 = ' 3';
let b1 = ' 4';
let b2 = ' 5';
let b3 = ' 6';
let c1 = ' 7';
let c2 = ' 8';
let c3 = ' 9';


function doesPlayerWantCross() {
  console.clear();
  return confirm('Do you want ' + CROSS + ' as your mark ?');
}

function printLine1() {
  // const line1 = ' 1 ' + a1 + LINE + b1 + LINE + c1;
  const line1 = '   ' + a1 + LINE + b1 + LINE + c1;
  
  console.log('\n' + line1);
}

function printLine2() {
  // const line2 = ' 2 ' + a2 + LINE + b2 + LINE + c2;
  const line2 = '   ' + a2 + LINE + b2 + LINE + c2;

  console.log(line2);
}

function printLine3() {
  // const line3 = ' 3 ' + a3 + LINE + b3 + LINE + c3;
  const line3 = '   ' + a3 + LINE + b3 + LINE + c3;

  console.log(line3);
}

function printHeading() {
  console.log('   A  B  C\n');
}

function printHorizontalLine() {
  console.log('   ━━╋━━╋━━');
}

function updateScreen() {
  console.clear();

  // printHeading();
  // printHorizontalLine();
  
  printLine1();
  printHorizontalLine();
  printLine2();
  printHorizontalLine();
  printLine3();
  // printHorizontalLine();

  // console.log('a1:', a1, 'a2:', a2, 'a3:', a3, 'b1:', b1, 'b2:', b2, 'b3:', b3, 'c1:', c1, 'c2:', c2, 'c3:', c3); 

}

function updateGrid(input, mark) {
  // console.log('Got into updateGrid()');
  // console.log('input is', input);

  switch (input) {
    case '1':
      if (a1 === ' 1') {
        a1 = mark;
        return true;
      }
      break;
    case '2':
      if (a2 === ' 2') {
        a2 = mark;
        return true;
      }
      break;
    case '3':
      if (a3 === ' 3') {
        a3 = mark;
        return true;
      }
      break;
    case '4':
      if (b1 === ' 4') {
        b1 = mark;
        return true;
      }
      break;
    case '5':
      if (b2 === ' 5') {
        b2 = mark;
        return true;
      }
      break;
    case '6':
      if (b3 === ' 6') {
        b3 = mark;
        return true;
      }
      break;
    case '7':
      if (c1 === ' 7') {
        c1 = mark;
        return true;
      }
      break;
    case '8':
      if (c2 === ' 8') {
        c2 = mark;
        return true;
      }
      break;
    case '9':
      if (c3 === ' 9') {
        c3 = mark;
        return true;
      }
      break;
    default :
      console.log(mark, 'input is not valid');

      return false;
  }

  // console.log(mark, 'input is not valid');

  // return false;
}

function takePlayerInput() {
  const playerInput = prompt('\nEnter the box you want to play ' + PLAYERMARK + ' on');

  return playerInput;
}

function takeComputerInput() {
  const randomBoxNumber = Math.round(Math.random() * 9);

  const number = (randomBoxNumber % 3) + 1;

  let computerInput = '';
  let letter = Math.round(randomBoxNumber / 3);

  console.log(letter + number);

  if (letter === 0) {
    computerInput = 'A' + number;
  }

  if (letter === 1) {
    computerInput = 'B' + number;
  }
  if (letter === 2) {
    computerInput = 'C' + number;
  }
  
  // return computerInput;
  return randomBoxNumber + '';
}

function hasGameEnded() {
  // const topAcross = (a1 === b1) && (a1 === c1) && (a1 !== '  ');
  // const middleAcross = (a2 === b2) && (a2 === c2) && (a2 !== '  ');
  // const bottomAcross = (a3 === b3) && (a3 === c3) && (a3 !== '  ');
  // const leftDown = (a1 === a2) && (a1 === a3) && (a1 !== '  ');
  // const middleDown = (b1 === b2) && (b1 === b3) && (b1 !== '  ');
  // const rightDown = (c1 === c2) && (c1 === c3) && (c1 !== '  ');
  // const leftDiagonal = (a1 === b2) && (a1 === c3) && (a1 !== '  ');
  // const rightDiagonal = (a3 === b2) && (a3 === c1) && (a3 !== '  ');

  const topAcross = (a1 === b1) && (a1 === c1);
  const middleAcross = (a2 === b2) && (a2 === c2);
  const bottomAcross = (a3 === b3) && (a3 === c3);
  const leftDown = (a1 === a2) && (a1 === a3);
  const middleDown = (b1 === b2) && (b1 === b3);
  const rightDown = (c1 === c2) && (c1 === c3);
  const leftDiagonal = (a1 === b2) && (a1 === c3);
  const rightDiagonal = (a3 === b2) && (a3 === c1);

  // console.log(topAcross, middleAcross, bottomAcross);
  // console.log(leftDown, middleDown, rightDown);
  // console.log(leftDiagonal, rightDiagonal);

  if (topAcross || middleAcross || bottomAcross) {
    return true;
  }

  if (leftDown || middleDown || rightDown) {
    return true;
  }

  if (leftDiagonal || rightDiagonal) {
    return true;
  }

  return false;
}

function isInputValid(input) {
  if (input === '1' || input === '2' || input === '3') {
    return true;
  }

  if (input === '4' || input === '5' || input === '6') {
    return true;
  }

  if (input === '7' || input === '8' || input === '9') {
    return true;
  }

  return false;
}

function ticTacToe() {
  updateScreen();

  let counter = 0;

  let didPlayerUpdateGrid = false;
  let didComputerUpdateGrid = false;

  while (!hasGameEnded() && counter++ < 40) {
    // console.log('Got into main while loop');
    let isPlayerInputValid = false;
    let isComputerInputValid = false;

    didComputerUpdateGrid = false;
    didPlayerUpdateGrid = false;

    let playerInput = '';
    let computerInput = '';
    
    while (((!isPlayerInputValid  && !hasGameEnded()) || !didPlayerUpdateGrid) && counter++ < 40) {
      // console.log('Player input not valid');

      playerInput = takePlayerInput();

      // console.log(playerInput);

      isPlayerInputValid = isInputValid(playerInput);

      didPlayerUpdateGrid = updateGrid(playerInput, PLAYERMARK);

      // if (isPlayerInputValid) {
      //   didPlayerUpdateGrid = updateGrid(playerInput, PLAYERMARK);

      //   console.log('You played at', playerInput);
      // }

      // console.log("player input is valid:", isPlayerInputValid);
      // console.log('didPlayerUpdateGrid:', didPlayerUpdateGrid);
    }

    updateScreen();
    console.log('\nYou played', PLAYERMARK, 'at', playerInput);

    // console.log('hasGameEnded', hasGameEnded());
    // console.log('didComputerUpdateGrid', didComputerUpdateGrid);
    // console.log('didPlayerUpdateGrid', didPlayerUpdateGrid);

    if (hasGameEnded()) {
      break;
    }

    for (let buffer = 0; buffer < 999999999; buffer++) {}

    while (((!isComputerInputValid || !didComputerUpdateGrid) && !hasGameEnded()) && counter++ < 40) {
      // console.log('Computer input not valid');

      computerInput = takeComputerInput();

      console.log(computerInput);
      
      isComputerInputValid = isInputValid(computerInput);

      didComputerUpdateGrid = updateGrid(computerInput, COMPUTERMARK);

      // if (isComputerInputValid) {
      //   didComputerUpdateGrid = updateGrid(computerInput, COMPUTERMARK);

      //   console.log('Computer played on', computerInput);
      // }

      // console.log("computer input is valid:", isComputerInputValid);
      // console.log('didComputerUpdateGrid:', didComputerUpdateGrid);
    }

    updateScreen();
    console.log('\nYou played', PLAYERMARK, 'at', playerInput);
    console.log('\nComputer played', COMPUTERMARK, 'on', computerInput);

    // console.log('hasGameEnded', hasGameEnded());
    // console.log('didComputerUpdateGrid', didComputerUpdateGrid);
    // console.log('didPlayerUpdateGrid', didPlayerUpdateGrid);
    // // console.log(counter);
  }
  
  // let isMessagePrinted = false;

  if (didPlayerUpdateGrid && hasGameEnded() && !didComputerUpdateGrid) {
    console.log('\n\nCONGRATS!!!!!🎉🎉🎉 YOU WON!!!!!!🎉🎉🎉🎉🎉');
    // isMessagePrinted = true;
  }

  if (didComputerUpdateGrid && hasGameEnded()) {
    console.log('\n\nOOPSS!! Computer won 😔😔😔')
    // isMessagePrinted = true;
  }

  if (!hasGameEnded()) {
    console.log('Uh Oh! Looks like it is a draw. 😐😐😐');
  }

  // console.log('\n\nGAME OVER');
  
}

ticTacToe();

// console.log(takeComputerInput());

// console.log(updateGrid('8', CIRCLE));
// console.log(updateGrid('8', CIRCLE));
// console.log(updateGrid('7', CIRCLE));
// console.log(updateGrid('7', CIRCLE));
// console.log(updateGrid('6', CIRCLE));
// console.log(updateGrid('6', CIRCLE));
// console.log(updateGrid('5', CIRCLE));
// console.log(updateGrid('5', CIRCLE));
// console.log(updateGrid('4', CIRCLE));
// console.log(updateGrid('4', CIRCLE));
// console.log(updateGrid('3', CIRCLE));
// console.log(updateGrid('3', CIRCLE));
// console.log(updateGrid('2', CIRCLE));
// console.log(updateGrid('2', CIRCLE));
// console.log(updateGrid('1', CIRCLE));
// console.log(updateGrid('1', CIRCLE));
// console.log(updateGrid('0', CIRCLE));




