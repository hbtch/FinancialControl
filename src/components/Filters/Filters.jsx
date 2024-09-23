import { Button } from '../Button/Button';
import styles from './Filters.module.css';

export const Filters = () => {
    return (
        <div className={styles.filters}>
            <h1>Остатки сформированы на 01.04.2023 г.</h1>
            <div className={styles.filterInputs}>
                <input type="text" placeholder="Баркод" />
                <input type="text" placeholder="Артикул" />
                <input type="text" placeholder="Размер" />
                <input type="text" placeholder="Категория" />
            </div>
            <div className={styles.buttonGroup}>
                <Button 
                    text="Сформировать" 
                    className={styles.buttonForm} 
                />
            </div>
        </div>
    );
};
