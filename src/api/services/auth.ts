import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "@/api";

interface Payload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
}

interface ResponseData {
  name: string;
  email: string;
  phone_number: string;
}

type CreateAccountResponse = AxiosResponse<ResponseData>;

const CREATE_ACCOUNT = async (
  payload: Payload
): Promise<CreateAccountResponse> => {
  try {
    const res = await axios.post<ResponseData>(
      `${BASE_URL}/auth/users/`,
      payload
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export default CREATE_ACCOUNT;
