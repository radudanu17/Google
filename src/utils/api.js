import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyB8cEJBO2zaOUA6rlvAhThM0MU_XtjMpjk",
  cx: "d36f93a549ccc4b15",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
