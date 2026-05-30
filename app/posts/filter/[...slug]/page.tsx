import { fetchPosts } from '@/lib/api';

import PostsClient from './Posts.client';
interface PostPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function PostsPage({ params }: PostPageProps) {
  const { slug } = await params;

  const userId = slug[0];

  const postsData = await fetchPosts({
    searchText: '',
    page: 1,
    userId,
  });

  return (
    <>
      <PostsClient userId={userId} postsData={postsData} />
    </>
  );
}

/* 
У цьому маршруті реалізуйте SSR: безпосередньо у page.tsx викликається функція fetchPosts, яка отримує початкові дані з бекенда, а потім передає їх до клієнтського компонента PostsClient. 
*/
