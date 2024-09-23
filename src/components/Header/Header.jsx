import { Button } from '../Button/Button'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <p>Иванов И.И</p>
            <p>Тариф до 15.04.24</p>
            <div className={styles.headerButtonGroup}>
                <Button 
                    text="Выйти" 
                    className={styles.buttonGetOut} 
                />
                <Button 
                    text="О нас" 
                    className={styles.buttonAboutUs} 
                />
            </div>
        </div>
    );
};