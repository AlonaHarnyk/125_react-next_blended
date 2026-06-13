'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { fetchPostById, fetchUserById } from '@/lib/api';

import css from './PostDetails.module.css';
import PostDetails from '../../../components/PostDetails/PostDetails';

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
      {post && user && (
        <main className={css.main}>
          <div className={css.container}>
            <div className={css.item}>
              <button className={css.backBtn} onClick={handleClickBack}>
                ← Back
              </button>

              <PostDetails post={post} user={user} />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
