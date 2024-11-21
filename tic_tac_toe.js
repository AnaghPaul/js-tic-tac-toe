const DASH = '━';
const PLUS = '╋';
const LINE = '┃';
const CROSS = '❌';
const CIRCLE = '⭕';

const ISCOMPUTERPLAYING = !willPlayer2Play();

let player1Points = 0;
let player2Points = 0;

let player1Name = prompt('Enter name of player 1:', 'Player 1');
let player2Name = 'Computer';

if (!ISCOMPUTERPLAYING) {
  player2Name = prompt('Enter name of player 2:', 'Player 2');
}

let MARK1 = doesPlayerWantCross() ? CROSS : CIRCLE;
let MARK2 = MARK1 === CROSS ? CIRCLE : CROSS;

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
  console.log();
  return confirm(player1Name + ' do you want ' + CROSS + ' as your mark ?');
}

function printLine1() {
  const line1 = '   ' + a1 + LINE + b1 + LINE + c1;
  
  console.log('\n' + line1);
}

function printLine2() {
  const line2 = '   ' + a2 + LINE + b2 + LINE + c2;

  console.log(line2);
}

function printLine3() {
  const line3 = '   ' + a3 + LINE + b3 + LINE + c3;

  console.log(line3);
}

function printHeading() {
  console.log('   A  B  C\n');
}

function printHorizontalLine() {
  console.log('   ━━╋━━╋━━');
}

function printPointBoard() {
  console.log('\n' + player1Name + ': ' + player1Points);
  console.log('\n' + player2Name + ': ' + player2Points);
  console.log('\n\n');
}

function updateScreen() {
  console.clear();    // ------comment this to see log-----------

  printPointBoard();
  printLine1();
  printHorizontalLine();
  printLine2();
  printHorizontalLine();
  printLine3();
}

function resetGrid() {
  a1 = ' 1';
  a2 = ' 2';
  a3 = ' 3';
  b1 = ' 4';
  b2 = ' 5';
  b3 = ' 6';
  c1 = ' 7';
  c2 = ' 8';
  c3 = ' 9';
}

function updateGrid(input, mark) {
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

  return randomBoxNumber + '';
}

function areAnyBoxesLeft () {
  if (a1 === ' 1' || a2 === ' 2' || a3 === ' 3') {
    return true;
  }

  if (b1 === ' 4' || b2 === ' 5' || b3 === ' 6') {
    return true;
  }

  if (c1 === ' 7' || c2 === ' 8' || c3 === ' 9') {
    return true;
  }

  return false;
}

function hasGameEnded() {
  const topAcross = (a1 === b1) && (a1 === c1);
  const middleAcross = (a2 === b2) && (a2 === c2);
  const bottomAcross = (a3 === b3) && (a3 === c3);
  const leftDown = (a1 === a2) && (a1 === a3);
  const middleDown = (b1 === b2) && (b1 === b3);
  const rightDown = (c1 === c2) && (c1 === c3);
  const leftDiagonal = (a1 === b2) && (a1 === c3);
  const rightDiagonal = (a3 === b2) && (a3 === c1);

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

function ticTacToe(player1Mark, player2Mark) {
  updateScreen();

  // let counter = 0;

  let didPlayer1UpdateGrid = false;
  let didPlayer2UpdateGrid = false;

  while (!hasGameEnded() && areAnyBoxesLeft()) {
    let isPlayer1InputValid = false;
    let isPlayer2InputValid = false;

    didPlayer1UpdateGrid = false;
    didPlayer2UpdateGrid = false;

    let player1Input = '';
    let player2Input = '';
    
    while (((!isPlayer1InputValid || !didPlayer1UpdateGrid) && !hasGameEnded()) && areAnyBoxesLeft()) {
      player1Input = takePlayerInput(player1Name, player1Mark);

      isPlayer1InputValid = isInputValid(player1Input);

      didPlayer1UpdateGrid = updateGrid(player1Input, player1Mark);
    }

    updateScreen();
    console.log('\n' + player1Name, 'played', player1Mark, 'at', player1Input);

    if (hasGameEnded()) {
      break;
    }

    for (let buffer = 0; buffer < 899999999; buffer++) {}

    while (((!isPlayer2InputValid || !didPlayer2UpdateGrid) && !hasGameEnded()) && areAnyBoxesLeft()) {
      if (ISCOMPUTERPLAYING) {
        player2Input = takeComputerInput(player2Mark);

      } else {
        player2Input = takePlayerInput(player2Name, player2Mark);
      }
      
      isPlayer2InputValid = isInputValid(player2Input);

      didPlayer2UpdateGrid = updateGrid(player2Input, player2Mark);
    }

    updateScreen();
    console.log('\n' + player1Name, 'played', player1Mark, 'at', player1Input);
    console.log('\n' + player2Name, 'played', player2Mark, 'at', player2Input);
  }

  if (didPlayer1UpdateGrid && hasGameEnded() && !didPlayer2UpdateGrid) {
    console.log('\n\nCONGRATS', player1Name, '!!🎉🎉 YOU WON!!!!!!🎉🎉🎉🎉🎉\n');

    player1Points++;
  }

  if (didPlayer2UpdateGrid && hasGameEnded()) {
    if (ISCOMPUTERPLAYING) {
      console.log('\n\nOOPSS!! Computer won 😔😔😔\n');

    } else {
      console.log('\n\nCONGRATS', player2Name, '!!🎉🎉 YOU WON!!!!!!🎉🎉🎉🎉🎉\n');
    }

    player2Points++;
  }

  if (!hasGameEnded() && !areAnyBoxesLeft()) {
    console.log('\n\nUh Oh! Looks like it is a draw. 😐😐😐\n');
  }
}

function startGame() {
  let doesUserWantToContinue = true;

  while(doesUserWantToContinue) {
    resetGrid();

    ticTacToe(MARK1, MARK2);

    doesUserWantToContinue = confirm('\nNext Round ?');

    MARK1 = MARK1 === CROSS ? CIRCLE : CROSS;
    MARK2 = MARK2 === CROSS ? CIRCLE : CROSS;

  }
}

// ticTacToe(MARK1, MARK2);

startGame();
