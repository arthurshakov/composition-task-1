import styles from './field.module.css';
import PropTypes from 'prop-types';

const FieldLayout = ({field, handleCellClick}) => {
	return (
		<div className={ styles.field }>
			{field.map((cell, index) => <div className={styles.cell} key={ `${Date.now()}-${index}` } onClick={() => handleCellClick(index)}>{ cell }</div>)}
		</div>
	)
}

export const FieldContainer = ({ field, handleCellClick }) => {
	return <FieldLayout field={ field } handleCellClick={handleCellClick} />
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleCellClick: PropTypes.func,
};

FieldContainer.propTypes = {
	field: PropTypes.array,
	handleCellClick: PropTypes.func,
};
