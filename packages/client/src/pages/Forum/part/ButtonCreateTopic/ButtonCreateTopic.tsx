import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/components/Button';
import { useNavigator } from 'src/hooks/useNavigator';
import styles from './ButtonCreateTopic.module.scss';

export const ButtonCreateTopic = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const handleCreateTopic = () => navigator('createtopic');

  return (
    <Button
      regular
      className={styles.button_create_topic}
      onClick={handleCreateTopic}>
      {t('postNewTopic')}
    </Button>
  );
};
