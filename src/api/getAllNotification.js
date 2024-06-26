import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_ENDPOINT + "/api/v1/getAllNotifications/");
    const data = response.data;

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchData;
