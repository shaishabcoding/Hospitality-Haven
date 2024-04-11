import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/auth/AuthContext";
import { useForm } from "react-hook-form";
import imgHolder from "../../../assets/icons/image-placeholder.jpg";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import testUsers from "../../../assets/json/testUsers.json";

const Update = () => {
  const navigate = useNavigate();
  const { update, user } = useContext(AuthContext);
  const [image, setImage] = useState(user.photoURL);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.displayName,
      image: user.photoURL,
      email: user.email,
    },
  });

  const handleFormSubmit = handleSubmit((data) => {
    update(data)
      .then(() => {
        toast.success("Update successfully");
        navigate("/");
      })
      .catch(({ message }) => {
        toast.error(message);
      });
  });
  return (
    <div className="my-6">
      <Helmet>
        <title>Hospitality Haven | Update Profile</title>
      </Helmet>
      <h2
        data-aos="zoom-in"
        data-aos-delay="400"
        className="text-2xl font-semibold text-center mb-6"
      >
        Update Profile
      </h2>
      <datalist id="test-users">
        {testUsers.map((user, index) => (
          <option key={index} value={user} />
        ))}
      </datalist>
      <img
        data-aos="zoom-in"
        data-aos-delay="500"
        src={image ? image : imgHolder}
        className="w-[150px] aspect-square object-center rounded-full bg-gray-50 ring-4 mx-auto mb-6"
      />
      <form className="grid w-fit mx-auto gap-4" onSubmit={handleFormSubmit}>
        <label
          data-aos="zoom-in"
          data-aos-delay="800"
          className="input input-bordered flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Enter your name"
            required
            {...register("name")}
          />
        </label>
        <label
          data-aos="zoom-in"
          data-aos-delay="1200"
          className="input input-bordered flex items-center gap-2 pl-2 pr-2"
        >
          <img
            src={image ? image : imgHolder}
            className="w-[2em] aspect-square object-center rounded-full bg-gray-50 ring-2"
          />
          <div className="overflow-hidden flex grow ml-1">
            <input
              type="url"
              className="grow -mr-4"
              list="test-users"
              placeholder="Enter your image url"
              required
              {...register("image", {
                onChange: (e) => {
                  setImage(e.target.value);
                },
              })}
            />
          </div>
        </label>
        <label
          data-aos="zoom-in"
          data-aos-delay="1600"
          className="input input-bordered flex items-center gap-2 bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Enter your email"
            {...register("email")}
            disabled
          />
        </label>
        <div data-aos="flip-left" data-aos-delay="2000">
          <button type="submit" className="btn w-full btn-primary ">
            Update <FaUserEdit />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
