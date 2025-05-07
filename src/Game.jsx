import { FieldContainer } from './components/Field/Field';
import { InformationContainer } from './components/Information/Information';
import styles from './game.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const GameLayout = ({field, handleCellClick, message, reset}) => {
  return (
    <div className={ styles.game }>
      <InformationContainer message= { message } />

      <FieldContainer field={ field } handleCellClick = { handleCellClick } />

      <button className={ styles['reset-button'] } onClick={ reset }>начать заново</button>
    </div>
  )
};

export const GameContainer = () => {
  const initialField = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];

  const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
	];

  const [field, setField] = useState(initialField);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  let message = `Ходит: ${currentPlayer}`;

	if (isDraw) {
		message = 'Ничья';
	} else if (isGameEnded) {
		message = `Победа: ${currentPlayer}`;
	}

  function reset() {
    setField(initialField);
    setIsGameEnded(false);
    setIsDraw(false);
    setCurrentPlayer('X');
  }

  function checkWinner(currentField, currentPlayer) {
		return WIN_PATTERNS.some(pattern => {
			return pattern.every(cellIndex => currentField[cellIndex] === currentPlayer);
		});
	}

	function handleCellClick(index) {
		if (!isGameEnded && field[index] === '') {
			const newField = field.map((cell, prevFieldIndex) => index === prevFieldIndex ? currentPlayer : cell);

			setField(newField);

			if (checkWinner(newField, currentPlayer)) {
				setIsGameEnded(true);
			} else if (newField.every(cell => cell !== '')) {
				setIsDraw(true);
			}else {
				setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
			}
		}
	}

  return (
    <GameLayout
      field={ field }
      handleCellClick = { handleCellClick }
      message = { message }
      reset= { reset }
    />
  )
};

GameLayout.propTypes = {
  field: PropTypes.array,
  handleCellClick: PropTypes.func,
  message: PropTypes.string,
  reset: PropTypes.func,
};
