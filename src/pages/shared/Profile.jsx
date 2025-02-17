import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loading } from "../../components/shared/Loading";

export const Profile = ({ role = "user", action }) => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { theme } = useSelector((state) => state.theme);
  const { register, handleSubmit, setValue, watch } = useForm();

  const user = {
    role: role,
    profile: `/${role}/profile`,
    updateProfile: `/${role}/update-profile`,
  };

  if (action === "Details") {
    user.profile = `/${role}/details/${userId}`;
  }

  const [profile, loading, error, fetchData] = useFetch(user.profile);
  const [profilePicturePreview, setProfilePicturePreview] = useState("");
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [edit, setEdit] = useState(false);
  const profilePictureFile = watch("profilePicture");

  useEffect(() => {
    if (profilePictureFile && profilePictureFile[0]) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePicturePreview(reader.result);
      reader.readAsDataURL(profilePictureFile[0]);
    }
  }, [profilePictureFile]);

  useEffect(() => {
    if (profile) {
      setValue("name", profile?.name || "");
      setValue("email", profile?.email || "");
      setValue("mobile", profile?.mobile || "");
      if (profile?.profilePicture) {
        setProfilePicturePreview(profile.profilePicture);
      }
    }
  }, [profile, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "profilePicture" && data.profilePicture[0]) {
          formData.append(key, data.profilePicture[0]);
        } else {
          formData.append(key, data[key]);
        }
      });

      await axiosInstance.put(user.updateProfile, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProfileUpdated(true);
      toast.success("Profile updated successfully");
      setEdit(false);
    } catch (error) {
      toast.error("Profile updation failed. Please try again!");
    }
  };

  useEffect(() => {
    if (profileUpdated) {
      setProfileUpdated(false);
      fetchData();
    }
  }, [profileUpdated]);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="profile-box shadow-lg p-4 rounded-4 text-center"
          style={{ backgroundColor: theme ? "#FAF0E6" : "#2c3e50", color: theme ? "black" : "white" }}
        >
          <h3 className="fw-bold mb-4">Profile {action}</h3>

          {profilePicturePreview && (
            <div className="mb-3">
              <img
                src={profilePicturePreview}
                alt="Profile Preview"
                className="rounded-circle border shadow"
                style={{ width: "320px", height: "200px", objectFit: "cover" }}
              />
            </div>
          )}

          <label className="btn btn-outline-black my-2">
            Upload Image
            <input type="file" {...register("profilePicture")} accept="image/*" hidden />
          </label>

          {edit ? (
            <input className="form-control my-2" type="text" {...register("name")} defaultValue={profile?.name} />
          ) : (
            <p className="border-bottom pb-1">{profile?.name}</p>
          )}

          {edit ? (
            <input className="form-control my-2" type="email" {...register("email")} defaultValue={profile?.email} />
          ) : (
            <p className="border-bottom pb-1">{profile?.email}</p>
          )}

          {edit ? (
            <input className="form-control my-2" type="text" {...register("mobile")} defaultValue={profile?.mobile} />
          ) : (
            <p className="border-bottom pb-1">{profile?.mobile}</p>
          )}

          <Button
            className="btn btn-primary mt-3 px-4 py-2"
            onClick={() => (edit ? handleSubmit(onSubmit)() : setEdit(!edit))}
          >
            {edit ? "Save Changes" : "Edit Profile"}
          </Button>
        </form>
      )}
    </Container>
  );
};
