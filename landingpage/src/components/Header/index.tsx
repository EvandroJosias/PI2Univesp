import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerMenuNav}>
                <img src='/images/logo200x200.svg' alt='logo Exchange'/>
            </div>
            
        </header>
    )
}