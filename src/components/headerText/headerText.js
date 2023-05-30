import styles from './headerText.module.css';
import PropTypes from 'prop-types';

export function HeaderText({ children }) {
	return <h3 className={styles.headerText}>{children}</h3>;
}

HeaderText.propTypes = {
	children: PropTypes.string,
};
