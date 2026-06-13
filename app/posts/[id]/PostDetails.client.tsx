'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { fetchPostById, fetchUserById } from '@/lib/api';

import css from './PostDetails.module.css';

export default function PostDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { data: post, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(Number(id)),
    refetchOnMount: false,
  });

  const { data: user } = useQuery({
    queryKey: ['user', post?.userId],
    queryFn: () => fetchUserById(post?.userId),
    enabled: !!post?.userId,
  });

  const handleClickBack = () => {
    router.back();
  };

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {post && (
        <main className={css.main}>
          <div className={css.container}>
            <div className={css.item}>
              <button className={css.backBtn} onClick={handleClickBack}>
                ← Back
              </button>

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
          </div>
        </main>
      )}
    </>
  );
}
