import styles from './cellButton.module.css';
import PropTypes from 'prop-types';

export function CellButton({ cell, setCell, player, setPlayer, check, setInfo }) {
	return (
		<button
			className={styles.cell}
			onClick={() => {
				setCell(player);
				setInfo(`Now player's ${player === 'x' ? 'o' : 'x'} turn`);
				setPlayer(player === 'x' ? 'o' : 'x');
			}}
			onChange={check()}
		>
			{cell}
		</button>
	);
}

CellButton.propTypes = {
	cell: PropTypes.string,
	setCell: PropTypes.func,
	player: PropTypes.string,
	setPlayer: PropTypes.func,
	setInfo: PropTypes.func,
	check: PropTypes.func,
};
