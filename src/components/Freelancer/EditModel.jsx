import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import EditInput from "../common/EditInput";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const EditModel = ({ setOpenModal, user }) => {
  const URL = import.meta.env.VITE_APP_BASE_URL;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (
      [
        "workPosition",
        "experiance",
        "behanceLink",
        "linkedInLink",
        "portfolioLink",
      ].includes(id)
    ) {
      setFormData((prevState) => ({
        ...prevState,
        profile: {
          ...prevState.profile,
          [id]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        profile: {
          workPosition: user?.profile?.workPosition || "",
          experiance: user?.profile?.experiance || "",
          behanceLink: user?.profile?.behanceLink || "",
          linkedInLink: user?.profile?.linkedInLink || "",
          portfolioLink: user?.profile?.portfolioLink || "",
        },
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const loadingToastId = toast.loading("Updating...", {
      style: {
        backgroundColor: "#4a90e2",
        color: "white",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.25rem",
        fontSize: "0.875rem",
        fontWeight: "bold",
      },
    });

    axios
      .post(URL + "user/profile/update", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(setUser(res?.data?.newProfile));
        toast.success(res.data.message, {
          style: {
            backgroundColor: "#34d399",
            color: "white",
            borderRadius: "0.375rem",
            padding: "0.75rem 1.25rem",
            fontSize: "0.875rem",
            fontWeight: "bold",
          },
        });
        toast.dismiss(loadingToastId);
        setOpenModal(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          style: {
            backgroundColor: "#ef4444",
            color: "white",
            borderRadius: "0.375rem",
            padding: "0.75rem 1.25rem",
            fontSize: "0.875rem",
            fontWeight: "bold",
          },
        });
        toast.dismiss(loadingToastId);
      });
  };

  return (
    <div
      onClick={() => setOpenModal(false)}
      className="fixed inset-0 z-50 bg-black/80"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-[900px] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg"
      >
        <p className="text-2xl font-bold">Edit Profile</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <EditInput
              id={"firstName"}
              label={"First Name"}
              placeholder={"First Name"}
              handleChange={handleChange}
              type={"text"}
              value={formData?.firstName}
            />
            <EditInput
              id={"lastName"}
              label={"Last Name"}
              placeholder={"Last Name"}
              handleChange={handleChange}
              type={"text"}
              value={formData?.lastName}
            />
            <EditInput
              id={"workPosition"}
              label={"Work Position"}
              placeholder={"HR"}
              handleChange={handleChange}
              type={"text"}
              value={formData?.profile?.workPosition}
            />
            <EditInput
              id={"email"}
              label={"Email"}
              placeholder={"Email"}
              handleChange={handleChange}
              type={"email"}
              value={formData?.email}
            />
            <EditInput
              id={"phoneNumber"}
              label={"Phone Number"}
              placeholder={"123456789"}
              handleChange={handleChange}
              type={"text"}
              value={formData?.phoneNumber}
            />
            <EditInput
              id={"experiance"}
              label={"Experiance"}
              placeholder={"6 months experience in Graphic Designer Intern"}
              handleChange={handleChange}
              type={"text"}
              value={formData?.profile?.experiance}
            />
            <EditInput
              id={"behanceLink"}
              label={"Behance Link"}
              placeholder={"http://www.behance.net/poornimaajm"}
              handleChange={handleChange}
              type={"text"}
              value={formData?.profile?.behanceLink}
            />
            <EditInput
              id={"linkedInLink"}
              label={"LinkedIn Link"}
              placeholder={
                "https://www.linkedin.com/in/poornimaa-mohan-01bb00302/"
              }
              handleChange={handleChange}
              type={"text"}
              value={formData?.profile?.linkedInLink}
            />
            <EditInput
              id={"portfolioLink"}
              label={"Portfolio Link"}
              placeholder={
                "https://www.linkedin.com/in/poornimaa-mohan-01bb00302/"
              }
              handleChange={handleChange}
              type={"text"}
              value={formData?.profile?.portfolioLink}
            />
          </div>
          <div className="flex justify-center gap-5">
            <button
              onClick={() => setOpenModal(false)}
              className="p-3 px-5 rounded-xl bg-green-500 text-white"
            >
              Back
            </button>
            <button className="p-3 rounded-xl bg-red-500 text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModel;
