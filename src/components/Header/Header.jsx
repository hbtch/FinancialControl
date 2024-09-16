import { Button } from '../Button/Button'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <p>Иванов И.И</p>
            <p>Тариф до 15.04.24</p>
            <Button text="Выйти" onClick={() => console.log('Кнопка Выйти нажата')}/>
            <Button text="О нас" onClick={() => console.log('Кнопка О Нас нажата')}/>
        </div>
    );
};