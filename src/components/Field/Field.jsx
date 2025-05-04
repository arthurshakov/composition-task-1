import styles from './field.module.css';
import PropTypes from 'prop-types';

const FieldLayout = ({field, handleCellClick}) => {
	return (
		<div className={ styles.field }>
			{field.map((cell, index) => <div className={styles.cell} key={ `${Date.now()}-${index}` } onClick={() => handleCellClick(index)}>{ cell }</div>)}
		</div>
	)
}

export const FieldContainer = ({ field, setField, isGameEnded, setIsGameEnded, currentPlayer, setCurrentPlayer, setIsDraw }) => {
	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
	];

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

	return <FieldLayout field={field} handleCellClick={handleCellClick} />
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleCellClick: PropTypes.func,
};

FieldContainer.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,

	setIsDraw: PropTypes.func,

	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,

	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
};