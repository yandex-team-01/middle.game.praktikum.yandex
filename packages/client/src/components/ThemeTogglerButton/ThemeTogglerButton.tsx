import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { selectTheme } from 'src/store/theme/selectTheme';
import { changeTheme } from 'src/store/theme/ThemeSlice';
import { Button } from '../Button';
import { themes } from './ThemeContext';
import styles from 'src/pages/MainMenu/MainMenu.module.scss';
import { useTranslation } from 'react-i18next';

export const ThemeTogglerButton = () => {
  const { t } = useTranslation();
  const currentTheme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    const theme = currentTheme === themes.light ? themes.dark : themes.light;
    dispatch(changeTheme(theme));
  };

  return (
    <div className={styles.block_buttons}>
      <Button regular onClick={toggleTheme}>
        {t('toggleTheme')}
      </Button>
    </div>
  );
};
