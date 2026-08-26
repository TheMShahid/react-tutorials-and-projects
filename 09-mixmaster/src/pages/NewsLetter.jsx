import { Form, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData);

  const data = Object.fromEntries(formData);
  // console.log(data);

  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);

    toast.success(response.data.msg);

    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
  }
};

const NewsLetter = () => {
  const navigation = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form action="" className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="form-label" className="name">
          name
        </label>
        <input type="text " name="name" id="name" className="form-input" />
      </div>
      {/* lastName */}
      <div className="form-row">
        <label htmlFor="form-label" className="lastName">
          last name
        </label>
        <input
          type="text "
          name="lastName"
          id="last name"
          className="form-input"
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          name="email"
          defaultValue="test@gmail.com"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        style={{ marginTop: "0.5rem" }}
        className="btn btn-block">
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};
export default NewsLetter;
