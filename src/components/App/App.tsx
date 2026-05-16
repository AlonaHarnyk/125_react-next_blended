import Modal from "../Modal/Modal";
import PostList from "../PostList/PostList";
import SearchBox from "../SearchBox/SearchBox";

import Pagination from "../Pagination/Pagination";

import { useDebouncedCallback } from 'use-debounce';

import { fetchPosts } from "../../services/postService";

import css from "./App.module.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const debouncedSetSearchQuery = useDebouncedCallback(setSearchQuery, 1000)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts', searchQuery, currentPage],
    queryFn: () => fetchPosts(searchQuery, currentPage)
  })

  const totalPages = Math.floor(100 / 8)

  return (
    <div className={css.app}>
      <header className={css.toolbar}>

        <SearchBox text={searchQuery} onSearch={debouncedSetSearchQuery} />

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage} />

        <button className={css.button}>Create post</button>
      </header>
      {/* <Modal>Передати через children компонент CreatePostForm або EditPostForm</Modal> */}

      {data && data.length > 0 && <PostList posts={data} />}
    </div>
  );
}
