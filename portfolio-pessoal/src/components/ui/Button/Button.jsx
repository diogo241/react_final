import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Button = ({ to, label, type, target }) => {
  return (
    <Link to={to}>
      <button type="button" target={target} className={`${styles['btn']} ${styles[`${type}`]}`}>
        {label}
      </button>
    </Link>
  );
};

export default Button;
