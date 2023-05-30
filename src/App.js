import { useState } from 'react';
import { AppLayout } from './appLayout';

export function App() {
	const [player, setPlayer] = useState('x');
	const [infoHeader, setInfoHeader] = useState(`Now player's ${player} turn`);

	const [cell0, setCell0] = useState();
	const [cell1, setCell1] = useState();
	const [cell2, setCell2] = useState();
	const [cell3, setCell3] = useState();
	const [cell4, setCell4] = useState();
	const [cell5, setCell5] = useState();
	const [cell6, setCell6] = useState();
	const [cell7, setCell7] = useState();
	const [cell8, setCell8] = useState();

	const cellStates = [
		[cell0, setCell0],
		[cell1, setCell1],
		[cell2, setCell2],
		[cell3, setCell3],
		[cell4, setCell4],
		[cell5, setCell5],
		[cell6, setCell6],
		[cell7, setCell7],
		[cell8, setCell8],
	];

	function restart() {
		cellStates.forEach((state) => state[1]());
	}

	function checkWinner() {
		if (
			(cell0 === player && cell1 === player && cell2 === player) ||
			(cell3 === player && cell4 === player && cell5 === player) ||
			(cell6 === player && cell7 === player && cell8 === player) ||
			(cell0 === player && cell3 === player && cell6 === player) ||
			(cell1 === player && cell4 === player && cell7 === player) ||
			(cell2 === player && cell5 === player && cell8 === player) ||
			(cell0 === player && cell4 === player && cell8 === player) ||
			(cell2 === player && cell4 === player && cell6 === player)
		) {
			setInfoHeader(`Player ${player} wins!`);
		}
	}

	return (
		<AppLayout
			infoHeader={infoHeader}
			cellStates={cellStates}
			player={player}
			setPlayer={setPlayer}
			checkWinner={checkWinner}
			setInfoHeader={setInfoHeader}
			restart={restart}
		/>
	);
}
