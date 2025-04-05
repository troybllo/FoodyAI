"use client";
import axios from "axios";
import { useState } from "react";

export default function GenerateRecipe() {
  const [ingredients, setIngredients] = useState("");
  const [diet, setDiet] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [error, setError] = useState("");

  async function handleGenerate(): Promise<void> {
    setLoading(true);
    setRecipe("");
    setError("");

    if (!ingredients.trim()) {
      setError("Please enter at least one ingredient");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "http://192.168.130.62:5000/api/generate-recipe",
        {
          ingredients,
          dietaryRestrictions: diet,
          mealType: goal,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setRecipe(res.data.recipe);
    } catch (err: Error) {
      console.error("Error details:", err);
      if (err.response) {
        // The server responded with a status code outside of 2xx
        setError(
          `Server error: ${err.response.data.error || err.response.statusText}`,
        );
      } else if (err.request) {
        // The request was made but no response was received
        setError(
          "No response from server. Please check if the server is running.",
        );
      } else {
        // Something happened in setting up the request
        setError(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl bg-clip-text bg-gradient-to-r text-transparent bg from-gray-950 to-gray-100 font-semibold mb-4">
        AI Recipe Generator
      </h2>
      {error && (
        <div className="text-red-600 mb-4 p-2 bg-red-100 rounded">{error}</div>
      )}
      <label className="block mb-1 font-medium">
        Ingredients (comma-separated):
      </label>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="e.g. chicken, rice, broccoli"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        required
      />
      <label className="block mb-1 font-medium">Dietary Preference:</label>
      <input
        type="text"
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        placeholder="e.g. keto, vegetarian, gluten-free"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      k<label className="block mb-1 font-medium">Meal Type:</label>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="e.g. dinner, breakfast, lunch"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`px-4 py-2 text-white rounded ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {loading ? "Generating..." : "Generate Recipe"}
      </button>
      {recipe && (
        <div className="p-4 mt-8 border-2 border-white rounded-2xl whitespace-pre-wrap">
          <div>{recipe}</div>
        </div>
      )}
    </div>
  );
}
