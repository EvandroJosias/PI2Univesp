import styles from './styles.module.scss';

export function Header(){
    return(
        <header>
            <div>
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