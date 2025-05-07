import styles from './information.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ message }) => {
	return (
		<div className={ styles.information }>
			{message && <div>{ message }</div>}
		</div>
	)
}

// export const InformationContainer = ({ isDraw, isGameEnded, currentPlayer }) => {
export const InformationContainer = ({ message }) => {
	return <InformationLayout message={ message } />
}

InformationLayout.propTypes = {
	message: PropTypes.string,
};

InformationContainer.propTypes = {
	message: PropTypes.string,
};
