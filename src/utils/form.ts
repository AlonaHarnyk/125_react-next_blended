import * as Yup from "yup";

export const PostSchema = Yup.object().shape({
  title: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
  body: Yup.string().max(500, "Too long!").required("Required"),
});

/* 
Title – заголовок поста (обов’язковий, мінімум 3 символи, максимум 50);
Content – текст поста (обов’язковий, максимум 500 символів). 
*/
