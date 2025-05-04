import styles from './information.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ message }) => {
	return (
		<div className={ styles.information }>
			{message && <div>{ message }</div>}
		</div>
	)
}

export const InformationContainer = ({ isDraw, isGameEnded, currentPlayer }) => {
	let message = `Ходит: ${currentPlayer}`;
	// const [message, setMessage] = useState(`Ходит: ${currentPlayer}`);

	if (isDraw) {
		message = 'Ничья';
	} else if (isGameEnded) {
		message = `Победа: ${currentPlayer}`;
	}

	return <InformationLayout message={ message } />
}

InformationLayout.propTypes = {
	message: PropTypes.string,
};

InformationContainer.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
