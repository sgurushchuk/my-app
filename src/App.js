import styles from './App.module.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function App() {
	const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '=', 'C'];
	const [displayValue, setDisplayValue] = useState(0);
	const [isResultColor, setIsResultColor] = useState(false);

	const makeCalcAction = (target) => {
		if (target === '=') {
			try {
				setIsResultColor(true);
				setDisplayValue(eval(displayValue));
			} catch (error) {
				setDisplayValue('Ooops incorrect values');
				setTimeout(() => setDisplayValue(0), 1000);
			}
		} else if (target === 'C') {
			setIsResultColor(false);
			setDisplayValue(0);
		} else {
			setIsResultColor(false);
			const nonZeroState = displayValue === 0 ? '' : displayValue;
			setDisplayValue(nonZeroState + target);
		}
	};

	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<input
					readOnly
					className={isResultColor ? styles.displayResult : styles.display}
					value={displayValue}
				></input>
				<div className={styles.keypad}>
					{buttons.map((button, index) => (
						<button
							className={styles.calcButton}
							key={uuid()}
							onClick={(event) => makeCalcAction(event.target.dataset.type)}
							data-type={button}
						>
							{button}
						</button>
					))}
				</div>
				<div></div>
			</header>
		</div>
	);
}
