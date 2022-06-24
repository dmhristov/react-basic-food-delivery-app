import classes from './Header.module.css';
import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React delivery</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of food.'></img>
        </div>
    </Fragment>
};

export default Header;