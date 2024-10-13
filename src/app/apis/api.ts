import { Gender } from "../components";

export const getRandomOutfitAsync = async (filter: Gender) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is not defined");
    }

    const response = await fetch(`${apiUrl}/v1/products?query=${filter}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
};
