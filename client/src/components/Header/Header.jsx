import classes from './Header.module.css';

const Header = () => {
	return (
		<div className={classes.wrapper}>
			<h1 className={classes.title}>Your Financial Exchange</h1>
		</div>
	);
};

export default Header;
