import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/Button';
import styles from './ButtonCreateTopic.module.scss';

export const ButtonCreateTopic = () => {
    const navigate = useNavigate();

    const handleCreateTopic = useCallback(() => {
        navigate('/forum/createtopic');
    }, [navigate]);

    return (
        <Button
            regular
            className={styles.button_create_topic}
            onClick={handleCreateTopic}>
            POST NEW TOPIC
        </Button>
    );
};
