const DASH = '━';
const PLUS = '╋';
const LINE = '┃';
const CROSS = '❌';
const CIRCLE = '⭕';

const ISCOMPUTERPLAYING = !willPlayer2Play();

let player1Name = prompt('Enter name of player 1:', 'Player 1');
let player2Name = 'Computer';

if (!ISCOMPUTERPLAYING) {
  player2Name = prompt('Enter name of player 1:', 'Player 2');
}

const PLAYER1MARK = doesPlayerWantCross() ? CROSS : CIRCLE;
const PLAYER2MARK = PLAYER1MARK === CROSS ? CIRCLE : CROSS;

let a1 = ' 1';
let a2 = ' 2';
let a3 = ' 3';
let b1 = ' 4';
let b2 = ' 5';
let b3 = ' 6';
let c1 = ' 7';
let c2 = ' 8';
let c3 = ' 9';

function willPlayer2Play() {
  console.clear();
  return confirm('Player 1 vs Player 2 ?')
}

function doesPlayerWantCross() {
  // console.clear();
  console.log();
  return confirm(player1Name + ' do you want ' + CROSS + ' as your mark ?');
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
  console.clear();    // ------comment this to see log-----------

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

    }
    
  console.log('\nYou cannot put', mark, 'at', input);
  return false;
}

function takePlayerInput(name, mark) {
  const playerInput = prompt('\n' + name + ', enter the box you want to play ' + mark + ' on');

  return playerInput;
}

function takeComputerInput() {
  const randomBoxNumber = Math.ceil(Math.random() * 9);

  // const number = (randomBoxNumber % 3) + 1;

  // let computerInput = '';
  // let letter = Math.round(randomBoxNumber / 3);

  // // console.log(letter + number);

  // if (letter === 0) {
  //   computerInput = 'A' + number;
  // }

  // if (letter === 1) {
  //   computerInput = 'B' + number;
  // }
  // if (letter === 2) {
  //   computerInput = 'C' + number;
  // }
  
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

  let didPlayer1UpdateGrid = false;
  let didPlayer2UpdateGrid = false;

  while (!hasGameEnded() && counter++ < 40) {
    // console.log('Got into main while loop');
    let isPlayer1InputValid = false;
    let isPlayer2InputValid = false;

    didPlayer1UpdateGrid = false;
    didPlayer2UpdateGrid = false;

    let player1Input = '';
    let player2Input = '';
    
    while (((!isPlayer1InputValid  && !hasGameEnded()) || !didPlayer1UpdateGrid) && counter++ < 40) {
      // console.log('Player input not valid');

      player1Input = takePlayerInput(player1Name, PLAYER1MARK);

      // console.log(playerInput);

      isPlayer1InputValid = isInputValid(player1Input);

      didPlayer1UpdateGrid = updateGrid(player1Input, PLAYER1MARK);

      // if (!didPlayer1UpdateGrid) {
      //   console.log('\nYou cannot put', PLAYER1MARK, 'at', player1Input);
      // }

      // if (isPlayerInputValid) {
      //   didPlayerUpdateGrid = updateGrid(playerInput, PLAYERMARK);

      //   console.log('You played at', playerInput);
      // }

      // console.log("player input is valid:", isPlayerInputValid);
      // console.log('didPlayerUpdateGrid:', didPlayerUpdateGrid);
    }

    updateScreen();
    console.log('\n', player1Name, 'played', PLAYER1MARK, 'at', player1Input);

    // console.log('hasGameEnded', hasGameEnded());
    // console.log('didComputerUpdateGrid', didComputerUpdateGrid);
    // console.log('didPlayerUpdateGrid', didPlayerUpdateGrid);

    if (hasGameEnded()) {
      break;
    }

    for (let buffer = 0; buffer < 999999999; buffer++) {}

    while (((!isPlayer2InputValid || !didPlayer2UpdateGrid) && !hasGameEnded()) && counter++ < 40) {
      // console.log('Computer input not valid');

      if (ISCOMPUTERPLAYING) {
        player2Input = takeComputerInput(PLAYER2MARK);

      } else {
        player2Input = takePlayerInput(player2Name, PLAYER2MARK);
      }

      // console.log('player2Input', player2Input);
      // console.log('counter', counter);
      
      isPlayer2InputValid = isInputValid(player2Input);

      didPlayer2UpdateGrid = updateGrid(player2Input, PLAYER2MARK);

      // if (isComputerInputValid) {
      //   didComputerUpdateGrid = updateGrid(computerInput, COMPUTERMARK);

      //   console.log('Computer played on', computerInput);
      // }

      // console.log("computer input is valid:", isComputerInputValid);
      // console.log('didComputerUpdateGrid:', didComputerUpdateGrid);
    }

    updateScreen();
    console.log('\n', player1Name, 'played', PLAYER1MARK, 'at', player1Input);
    console.log('\n', player2Name, 'played', PLAYER2MARK, 'at', player2Input);


    // console.log('hasGameEnded', hasGameEnded());
    // console.log('didComputerUpdateGrid', didComputerUpdateGrid);
    // console.log('didPlayerUpdateGrid', didPlayerUpdateGrid);
    // // console.log(counter);
  }
  
  // let isMessagePrinted = false;

  if (didPlayer1UpdateGrid && hasGameEnded() && !didPlayer2UpdateGrid) {
    console.log('\n\nCONGRATS', player1Name, '!!🎉🎉 YOU WON!!!!!!🎉🎉🎉🎉🎉\n');
    // isMessagePrinted = true;
  }

  if (didPlayer2UpdateGrid && hasGameEnded()) {
    if (ISCOMPUTERPLAYING) {
      console.log('\n\nOOPSS!! Computer won 😔😔😔\n');

    } else {
      console.log('\n\nCONGRATS', player2Name, '!!🎉🎉 YOU WON!!!!!!🎉🎉🎉🎉🎉\n');
    }
    // isMessagePrinted = true;
  }

  if (!hasGameEnded()) {
    console.log('\n\nUh Oh! Looks like it is a draw. 😐😐😐\n');
  }

  // console.log('\n\nGAME OVER');
  
}

function startGame() {

}

ticTacToe();

// console.log(takeComputerInput());
