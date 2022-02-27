import * as Yup from "yup";

const ProfileSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required."),
  email: Yup.string().required("Email is required."),
});
export default ProfileSchema;
