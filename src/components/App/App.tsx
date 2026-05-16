import Modal from "../Modal/Modal";
import PostList from "../PostList/PostList";
import SearchBox from "../SearchBox/SearchBox";
import CreatePostForm from '../CreatePostForm/CreatePostForm'

import Pagination from "../Pagination/Pagination";

import { useDebouncedCallback } from 'use-debounce';

import { fetchPosts } from "../../services/postService";

import css from "./App.module.css";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Post } from "../../types/post";

export default function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCreatePost, setIsCreatePost] = useState(false)
  const debouncedSetSearchQuery = useDebouncedCallback(setSearchQuery, 1000)

  const [isEditPost, setIsEditPost] = useState(false)
  const [editedPost, setEditedPost] = useState<null | Post>(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts', searchQuery, currentPage],
    queryFn: () => fetchPosts(searchQuery, currentPage),
    placeholderData: keepPreviousData
  })

  const handleCreatePost = () => {
    setIsModalOpen(true)
    setIsCreatePost(true)
  }

  const closeModal = () => {
    setIsCreatePost(false)
    setIsModalOpen(false)
  }

  const totalPages = Math.floor(100 / 8)

  return (
    <div className={css.app}>
      <header className={css.toolbar}>

        <SearchBox text={searchQuery} onSearch={debouncedSetSearchQuery} />

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage} />

        <button onClick={handleCreatePost} className={css.button}>Create post</button>
      </header>

      {isModalOpen && <Modal>
        {isCreatePost && <CreatePostForm closeModal={closeModal} />}
      </Modal>}

      {data && data.length > 0 && <PostList posts={data} />}
    </div>
  );
}
