import { useCallback, useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import styles from './EmojiBlock.module.scss';
import './reactions.scss';
import { useAppSelector } from 'src/hooks/redux';
import { selectUser } from 'src/store/auth/AuthSelectors';
import { IEmojiCreate } from './types';
import { AiFillPlusCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { Props } from './types';
import { useBoundAction } from 'src/hooks/useBoundAction';
import { fetchCreateReaction } from 'src/store/forum/ForumActions';
import { v1 } from 'uuid';

export interface IProps {
  emoticons: string[];
  id: string;
  keywords: string[];
  name: string;
  native: string;
  shortcodes: string;
  unified: string;
}

export const EmojiBlock = ({ reactions, idComment }: Props) => {
  const user = useAppSelector(selectUser);

  const [showEmoji, setShowEmoji] = useState(false);

  const addReaction = useBoundAction((reaction: IEmojiCreate) =>
    fetchCreateReaction(reaction)
  );

  const addEmojiToComment = (event: IProps) => {
    const newEmoji: IEmojiCreate = {
      id: v1(),
      id_comment: idComment,
      value: event.native,
      id_author: String(user.id),
    };

    addReaction(newEmoji);
  };
  const addEmoji = (value: string) => {
    const newEmoji: IEmojiCreate = {
      id: v1(),
      id_comment: idComment,
      value: value,
      id_author: String(user.id),
    };

    addReaction(newEmoji);
  };

  const openOrCloseEmojiBlock = useCallback(() => {
    setShowEmoji(prev => !prev);
  }, []);

  return (
    <div className={styles.block}>
      <div className={styles['emoji-container']}>
        {reactions.map((item, index) => (
          <>
            {item.authorsId.length === 0 ? null : (
              <button
                key={index}
                className={styles.emoji}
                onClick={() => {
                  addEmoji(item.value);
                }}>
                <span>{item.value}</span>
                <span className={styles['emoji-number']}>
                  {item.authorsId.length}
                </span>
              </button>
            )}
          </>
        ))}
      </div>

      <div className={styles['emoji-list']}>
        {showEmoji && (
          <div className={styles.reactions}>
            <Picker
              searchPosition="none"
              data={data}
              onEmojiSelect={addEmojiToComment}
              categories={['frequent']}
              navPosition="none"
              previewPosition="none"
              emojiButtonSize="20"
              emojiSize="14"
            />
          </div>
        )}

        {showEmoji ? (
          <AiOutlineCloseCircle
            onClick={openOrCloseEmojiBlock}
            className={styles['emoji_add']}
          />
        ) : (
          <AiFillPlusCircle
            onClick={openOrCloseEmojiBlock}
            className={styles['emoji_add']}
          />
        )}
      </div>
    </div>
  );
};
