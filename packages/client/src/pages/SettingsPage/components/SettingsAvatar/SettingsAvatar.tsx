import styles from "./SettingsAvatar.module.scss"

export const SettingsAvatar = () => {
    const url = 0;
    return (
        <div className={styles.rounded}>
            {!url && (
                <img src="../../../../assets/images/no-avatar.png" alt="user_1" />
            )}
        </div>
    )
}
