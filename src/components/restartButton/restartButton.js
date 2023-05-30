import PropTypes from 'prop-types';
import styles from './restartButton.module.css';

export function RestartButton({ restartGame }) {
	return (
		<button className={styles.restartButton} onClick={restartGame}>
			Restart
		</button>
	);
}

RestartButton.propTypes = {
	restartGame: PropTypes.func,
};
