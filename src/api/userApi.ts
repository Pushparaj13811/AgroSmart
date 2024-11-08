import axios from 'axios';
import { User } from '../types/types';

const ApiUrl = import.meta.env.VITE_BACKEND_URL;

const register = async (user: User) => {
  try {
    const response = await axios.post(`${ApiUrl}/users/register`, user);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Account Creation failed due to an unknown error");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
};

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${ApiUrl}/users/login`, { email, password });
    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Login failed due to an unknown error");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
};

const logout = async () => {
  try {
    const response = await axios.post(`${ApiUrl}/users/logout`);
    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Logout failed due to an unknown error");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
}

const getUser = async () => {
  try {
    const response = await axios.get(`${ApiUrl}/users/getuser`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "An error occurred while fetching user data");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
}
const refreshAccessToken = async () => {
  try {
    const response = await axios.post(`${ApiUrl}/users/refreshtoken`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "An error occurred while refreshing the access token");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
}

const changeCurrentPassword = async (oldPassword: string, newPassword: string) => {
  try {
    const response = await axios.patch(`${ApiUrl}/users/changepassword`, { oldPassword, newPassword });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "An error occurred while changing the password");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
}

const updateUserAvatar = async (avatar: File) => {
  try {
    const formData = new FormData();
    formData.append('avatar', avatar);
    const response = await axios.patch(`${ApiUrl}/users/updateavatar`, formData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "An error occurred while updating the avatar");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
}

const updateUserCoverImage = async (coverImage: File) => {
  try {
    const formData = new FormData();
    formData.append('coverImage', coverImage);
    const response = await axios.patch(`${ApiUrl}/users/updatecoverimage`, formData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "An error occurred while updating the cover image");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
}

const updateUserProfile = async (user: User) => {
  try {
    const response = await axios.patch(`${ApiUrl}/users/updateaccount`, user);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "An error occurred while updating the user profile");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
}

const updateUserLanguage = async (language: string) => {
  try {
    const response = await axios.patch(`${ApiUrl}/users/updatelanguage`, { language });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "An error occurred while updating the language");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
}

const updateUserBio = async (bio: string) => {
  try {
    const response = await axios.patch(`${ApiUrl}/users/updatebio`, { bio });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "An error occurred while updating the bio");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
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
