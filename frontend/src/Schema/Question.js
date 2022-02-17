import * as Yup from "yup";

const QuesSchema = Yup.object().shape({
  title: Yup.string().required("Title is required."),
  description: Yup.string().required("Description is required."),
  tags: Yup.string().required("Tags is required."),
});
export default QuesSchema;
