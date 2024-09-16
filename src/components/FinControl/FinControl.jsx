import { Button } from '../Button/Button';
import styles from './FinControl.module.css';

export const FinControl = () => {
    return (
        <div className={styles.finControl}>
            <div class={styles.finControlHeader}>
                <p>ФИН контроль</p>
                <Button text="Меню" onClick={() => console.log('Меню нажато')}/>
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>Настройки</li>
                <li className={styles.navItem}>Внесение данных</li>
                <li className={styles.navItem}>Отчеты</li>
                <li className={styles.navItem}>База знаний</li>
            </ul>
        </div>
    );
};