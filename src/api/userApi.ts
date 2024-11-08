import axios from 'axios';
import { User } from '../types/types';

const ApiUrl = import.meta.env.VITE_BACKEND_URL;

const register = async (user: User) => {
  try {
    const response = await axios.post(`${ApiUrl}/users/register`, user);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${ApiUrl}/users/login`, { email, password });
    return response.data;

  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const logout = async () => {
  try {
    const response = await axios.post(`${ApiUrl}/users/logout`);
    return response.data;

  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
}

const getUser = async () => {
  try {
    const response = await axios.get(`${ApiUrl}/users/getuser`);
    return response.data;
  } catch (error) {
    console.error("Error during user fetch:", error);
    throw error;
  }
}
const refreshAccessToken = async () => {
  try {
    const response = await axios.post(`${ApiUrl}/users/refreshtoken`);
    return response.data;
  } catch (error) {
    console.error("Error during token refresh:", error);
    throw error;
  }
}

const changeCurrentPassword = async (oldPassword: string, newPassword: string) => {
  try {
    const response = await axios.patch(`${ApiUrl}/users/changepassword`, { oldPassword, newPassword });
    return response.data;
  } catch (error) {
    console.error("Error during password change:", error);
    throw error;
  }
}

const updateUserAvatar = async (avatar: File) => {
  try {
    const formData = new FormData();
    formData.append('avatar', avatar);
    const response = await axios.patch(`${ApiUrl}/users/updateavatar`, formData);
    return response.data;
  } catch (error) {
    console.error("Error during avatar update:", error);
    throw error;
  }
}

const updateUserCoverImage = async (coverImage: File) => {
  try {
    const formData = new FormData();
    formData.append('coverImage', coverImage);
    const response = await axios.patch(`${ApiUrl}/users/updatecoverimage`, formData);
    return response.data;
  } catch (error) {
    console.error("Error during cover image update:", error);
    throw error;
  }
}

const updateUserProfile = async (user: User) => {
  try {
    const response = await axios.patch(`${ApiUrl}/users/updateaccount`, user);
    return response.data;
  } catch (error) {
    console.error("Error during profile update:", error);
    throw error;
  }
}

const updateUserLanguage = async (language: string) => {
  try {
    const response = await axios.patch(`${ApiUrl}/users/updatelanguage`, { language });
    return response.data;
  } catch (error) {
    console.error("Error during language update:", error);
    throw error;
  }
}

const updateUserBio = async (bio: string) => {
  try {
    const response = await axios.patch(`${ApiUrl}/users/updatebio`, { bio });
    return response.data;
  } catch (error) {
    console.error("Error during bio update:", error);
    throw error;
  }
}

export {
  register,
  login,
  logout,
  getUser,
  refreshAccessToken,
  changeCurrentPassword,
  updateUserAvatar,
  updateUserCoverImage,
  updateUserProfile,
  updateUserLanguage,
  updateUserBio
};
