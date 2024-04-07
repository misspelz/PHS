import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "@/api";

type CreateAccountResponse = AxiosResponse<RegisterResponseData>;
type LoginResponse = AxiosResponse<LogInResponseData>;
interface RegPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
}
interface RegisterResponseData {
  name: string;
  email: string;
  phone_number: string;
}
interface LogInPayload {
  email: string;
  password: string;
}
interface LogInResponseData {
  auth_token: string;
}
interface ForgotPasswordPayload {
  email: string;
}
interface VerifyOTPPayload {
  user_id: string;
  token: string;
}
interface ResetPasswordPayload {
  user_id: string;
  new_password: string;
  confirm_password: string;
}
interface ContactPayload {
  name: string;
  email: string;
  phone_number: string;
  message: string;
  image: File | null;
}
interface AppointmentPayload {
  user: string;
  service_name: string;
  time: string;
  address: string;
  date: string;
}

const CREATE_ACCOUNT = async (
  payload: RegPayload
): Promise<CreateAccountResponse> => {
  try {
    const res = await axios.post<RegisterResponseData>(
      `${BASE_URL}/auth/users/`,
      payload
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export default CREATE_ACCOUNT;

export const LOG_IN = async (payload: LogInPayload): Promise<LoginResponse> => {
  try {
    const res = await axios.post<LogInResponseData>(
      `${BASE_URL}/authtoken/token/login`,
      payload
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getToken = () => {
  const token = localStorage.getItem("phsAuthToken");
  return token;
};

export const FORGOT_PASSWORD = async (email: ForgotPasswordPayload) => {
  try {
    const res = await axios.post(`${BASE_URL}/forgot-password/`, email);
    return res;
  } catch (error) {
    throw error;
  }
};

export const VERIFY_OTP = async (payload: VerifyOTPPayload) => {
  try {
    const res = await axios.post(`${BASE_URL}/verify-token/`, payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const RESET_PASSWORD = async (payload: ResetPasswordPayload) => {
  try {
    const res = await axios.post(`${BASE_URL}/reset-password/`, payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const CONTACT = async (payload: FormData) => {
  try {
    const res = await axios.post(`${BASE_URL}/contact/`, payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const MAKE_AN_APPOINTMENT = async (payload: AppointmentPayload) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/phs/`, payload, {
      headers: {
        Authorization: `Token ${getToken()}`,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const GET_USER_PROFILE = async () => {
  const res = await axios.get(`${BASE_URL}/auth/users/`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  });
  return res;
};
