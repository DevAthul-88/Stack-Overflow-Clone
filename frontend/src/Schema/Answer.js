import * as Yup from "yup";

const AnswerSchema = Yup.object().shape({
  answer: Yup.string().required("Answer is required."),
});
export default AnswerSchema;
