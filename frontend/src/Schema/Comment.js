import * as Yup from "yup";

const CommentSchema = Yup.object().shape({
  comment: Yup.string().required("Comment is required."),

});
export default CommentSchema;
