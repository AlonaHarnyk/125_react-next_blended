import { Post } from '@/types/post';
import { User } from '@/types/user';

import css from './PostDetails.module.css';

interface PostDetailsProps {
  post: Post;
  user: User;
}

export default function PostDetails({ post, user }: PostDetailsProps) {
  return (
    <div>
      <div className={css.post}>
        <div className={css.wrapper}>
          <div className={css.header}>
            <h2>{post.title}</h2>
          </div>

          <p className={css.content}>{post.body}</p>
        </div>
        {user && <p className={css.user}>Author: {user.name}</p>}
      </div>
    </div>
  );
}
