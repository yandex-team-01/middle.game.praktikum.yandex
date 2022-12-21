import { useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import styles from './EmojiBlock.module.scss';
import './reactions.scss';
import { useAppSelector } from 'src/hooks/redux';
import { selectUser } from 'src/store/auth/AuthSelectors';
import { IEmoji } from './types';

export interface IProps {
  emoticons: string[];
  id: string;
  keywords: string[];
  name: string;
  native: string;
  shortcodes: string;
  unified: string;
}

export const EmojiBlock = () => {
  const user = useAppSelector(selectUser);

  const [showEmoji, setShowEmoji] = useState(false);
  const [emojiList, setListEmoji] = useState<IEmoji[]>([]);

  const addEmojiToComment = (event: IProps) => {
    const newEmojiList = [...emojiList];
    const indexEmoji = newEmojiList.findIndex(
      item => item.native === event.native
    );

    if (indexEmoji === -1) {
      newEmojiList.push({
        native: event.native,
        number: 1,
        usersId: [user.id],
      });
    } else {
      const indexUserID = newEmojiList[indexEmoji].usersId.findIndex(
        item => item === user.id
      );
      if (indexUserID === -1) {
        newEmojiList[indexEmoji].number += 1;
        newEmojiList[indexEmoji].usersId.push(user.id);
      } else {
        newEmojiList[indexEmoji].number -= 1;
        newEmojiList[indexEmoji].usersId.splice(indexUserID, 1);
      }
    }

    setListEmoji(newEmojiList);
  };

  return (
    <div className={styles.block}>
      <div className={styles['emoji-container']}>
        {emojiList.map((item, index) => (
          <button key={index} className={styles.emoji}>
            <span>{item.native}</span>
            <span className={styles['emoji-number']}>{item.number}</span>
          </button>
        ))}
      </div>

      {showEmoji && (
        <div className={styles.reactions}>
          <Picker
            searchPosition="none"
            data={data}
            onEmojiSelect={addEmojiToComment}
            categories={['frequent']}
            onClickOutside={() => {
              console.log('закрыть!');
            }}
            navPosition="none"
            previewPosition="none"
            emojiButtonSize="20"
            emojiSize="14"
          />
        </div>
      )}
      <button
        onClick={() => {
          setShowEmoji(prev => !prev);
        }}>
        +
      </button>
    </div>
  );
};
