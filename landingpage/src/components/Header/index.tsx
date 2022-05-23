import styles from '../../styles/forms.module.scss';

export function Header(){
    return(
        <header className={styles.header_container}>
            <div className={styles.headerMenuNav}>
                <img src='/images/logo200x100.png' alt='logo Exchange'/>
            </div>            
        </header>
    )
}