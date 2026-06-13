'use client';

import Modal from '@/components/Modal/Modal';
import PostDetails from '@/components/PostDetails/PostDetails';
import { fetchPostById, fetchUserById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function NotePreview() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

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

  return (
    <Modal onClose={() => router.back()}>
      {post && user && <PostDetails user={user} post={post} />};
    </Modal>
  );
}
