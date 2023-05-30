import styles from './appLayout.module.css';
import { CellButton, RestartButton, HeaderText } from './components';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

export function AppLayout({
	infoHeader,
	cellStates,
	player,
	setPlayer,
	checkWinner,
	setInfoHeader,
	restart,
}) {
	return (
		<div className={styles.app}>
			<HeaderText>{infoHeader}</HeaderText>
			<div className={styles.field}>
				{cellStates.map((item) => (
					<CellButton
						key={uuid()}
						player={player}
						setPlayer={setPlayer}
						cell={item[0]}
						setCell={item[1]}
						check={checkWinner}
						setInfo={setInfoHeader}
					/>
				))}
			</div>
			<RestartButton restartGame={restart} />
		</div>
	);
}

AppLayout.propTypes = {
	infoHeader: PropTypes.string,
	cellStates: PropTypes.array,
	player: PropTypes.string,
	setPlayer: PropTypes.func,
	checkWinner: PropTypes.func,
	setInfoHeader: PropTypes.func,
	restart: PropTypes.func,
};
