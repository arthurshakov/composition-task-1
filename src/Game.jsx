import { FieldContainer } from './components/Field/Field';
import { InformationContainer } from './components/Information/Information';
import styles from './game.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const GameLayout = ({field, setField, isDraw, setIsDraw, isGameEnded, setIsGameEnded, currentPlayer, setCurrentPlayer, reset}) => {
  return (
    <div className={ styles.game }>
      <InformationContainer
        isDraw={ isDraw }
        isGameEnded={ isGameEnded }
        currentPlayer={ currentPlayer }
      />

      <FieldContainer
        field={ field }
        setField={ setField }
        setIsDraw={ setIsDraw }
        isGameEnded={ isGameEnded }
        setIsGameEnded={ setIsGameEnded }
        currentPlayer={ currentPlayer }
        setCurrentPlayer={ setCurrentPlayer }
      />

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

  const [field, setField] = useState(initialField);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  function reset() {
    setField(initialField);
    setIsGameEnded(false);
    setIsDraw(false);
    setCurrentPlayer('X');
  }

  return (
    <GameLayout
      field={ field }
      setField={ setField }
      isDraw={ isDraw }
      setIsDraw={ setIsDraw }
      isGameEnded={ isGameEnded }
      setIsGameEnded = { setIsGameEnded }
      currentPlayer={ currentPlayer }
      setCurrentPlayer={ setCurrentPlayer }
      reset= { reset }
    />
  )
};

GameLayout.propTypes = {
  field: PropTypes.array,
  setField: PropTypes.func,

  isDraw: PropTypes.bool,
  setIsDraw: PropTypes.func,

  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.func,

  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,

  reset: PropTypes.func,
};