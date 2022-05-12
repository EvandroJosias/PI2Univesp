import styles from './styles.module.scss';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerMenuNav}>
                <img src='/images/logo.svg' alt='logo Exchange'/>
                <a>Home</a>
            </div>
            <div>
                <a>Login</a>
                <a>Logup</a>
            </div>
            
        </header>
    )
}