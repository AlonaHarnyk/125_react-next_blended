// import { fetchPosts } from '@/lib/api';

import PostsClient from './Posts.client';
interface PostPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function PostsPage({ params }: PostPageProps) {
  return (
    <>
      <PostsClient />
    </>
  );
}
