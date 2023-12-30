import axios from "axios";

export const fetchContacts = async () => {
  try {
    const response = await axios.get("http://localhost:1337/passenger");
    return response?.data?.items || [];
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error; 
  }
};
export const fetchContactDetails = async (id) => {
  try {
    const response = await axios.get(`http://localhost:1337/passenger/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact details:", error);
    throw error;
  }
};
