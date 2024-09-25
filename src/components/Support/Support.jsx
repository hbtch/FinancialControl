import styles from './Support.module.css';

export const Support = () => {
    return (
        <div className={styles.support}>
            <div className={styles.supportHeader}>
                <p>Техническая поддержка</p>
            </div>
            <div className={styles.supportInfo}>
                <div className={styles.supportInfoFirst}>
                    <div className={styles.supportItem}>
                        <p className={styles.label}>Номер поддержки:</p>
                        <p className={styles.value}><a href="tel:+89999999999">8 (999) 999 99 99</a></p>
                    </div>
                    <div className={styles.contactItem}>
                        <p className={styles.label}>Почта поддержки:</p>
                        <p className={styles.value}><a href="mailto:pf1@werthesest.ru">pf1@werthesest.ru</a></p>
                    </div>
                </div>
                <div className={styles.contactItem}>
                    <p className={styles.label}>Часы работы:</p>
                    <p className={styles.value}>ПН - ПТ с 9:00 до 19:00 МСК</p>
                </div>
            </div>
            <div className={styles.links}>
                <ul className={styles.linkList}>
                    <li><a href="#">Пользовательское соглашение</a></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                    <li><a href="#">Юридическая информация</a></li>
                    <li><a href="#">Публичная оферта</a></li>
                </ul>
            </div>
        </div>
    );
};
