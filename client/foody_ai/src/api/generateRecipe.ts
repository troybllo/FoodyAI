import axios from "axios";

export const generateReipe = async (prompt: string) => {
  const res = await axios.post("http://localhost:5000/api/generate-recipe", {
    prompt,
  });
  return res.data.recipe;
};
