import { Field, Form, Formik, FormikHelpers, ErrorMessage } from "formik";
import type { FormValues } from "../../types/formValues";
import { PostSchema } from "../../utils/form";

import css from "./CreatePostForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../services/postService";

const initialValues: FormValues = {
  title: '',
  body: ''
}

interface PostFormProps {
  closeModal: () => void
}

export default function PostForm({ closeModal }: PostFormProps) {

  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      closeModal();
    }
  })

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    mutate(values);
    actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={PostSchema}>
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="title">Title</label>
          <Field id="title" type="text" name="title" className={css.input} />
          <ErrorMessage name="title" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="body">Content</label>
          <Field id="body" as="textarea" name="body" rows="8" className={css.textarea} />
          <ErrorMessage name="body" component="span" className={css.error} />
        </div>

        <div className={css.actions}>
          <button onClick={closeModal} type="button" className={css.cancelButton}>
            Cancel
          </button>
          <button type="submit" className={css.submitButton} disabled={isPending}>
            Create post
          </button>
        </div>
      </Form>
    </Formik>
  );
}
