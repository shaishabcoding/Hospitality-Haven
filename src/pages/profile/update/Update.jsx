import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/auth/AuthContext";
import { useForm } from "react-hook-form";
import picture from "../../../assets/icons/picture.svg";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";

const Update = () => {
  const navigate = useNavigate();
  const { update, user } = useContext(AuthContext);
  const [image, setImage] = useState(user.photoURL);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.displayName,
      image: user.photoURL,
      email: "john.doe@example.com",
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
      <h2 className="text-2xl font-semibold text-center mb-6">
        Update Profile
      </h2>
      <form className="grid w-fit mx-auto gap-4" onSubmit={handleFormSubmit}>
        <label className="input input-bordered flex items-center gap-2">
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
        <label className="input input-bordered flex items-center gap-2">
          <img src={image ? image : picture} className="w-[1em]" />
          <input
            type="url"
            className="grow"
            placeholder="Enter your image url"
            required
            {...register("image", {
              onChange: (e) => {
                setImage(e.target.value);
              },
            })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-gray-50">
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
            value={user.email}
            disabled
          />
        </label>
        <button type="submit" className="btn btn-primary ">
          Update <FaUserEdit />
        </button>
      </form>
    </div>
  );
};

export default Update;
