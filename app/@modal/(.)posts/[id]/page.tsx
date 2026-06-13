import { fetchPostById } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NotePreview from './NotePreview.client';

interface PostPreviewProps {
  // назва папки
  params: Promise<{ id: string }>;
}

export default async function PostPreview({ params }: PostPreviewProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  // обов'язково через await
  await queryClient.prefetchQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(Number(id)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreview />;
    </HydrationBoundary>
  );
}
