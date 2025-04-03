from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
# Enable CORS for all domains on all routes
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route("/api/generate-recipe", methods=["POST", "OPTIONS"])
def generate_recipe():
    if request.method == "OPTIONS":
        # Handle preflight request
        response = jsonify()
        response.status_code = 200
        return response

    data = request.json
    ingredients = data.get("ingredients", "")
    dietary = data.get("dietaryRestrictions", "")
    meal_type = data.get("mealType", "")
    cuisine = data.get("cuisine", "")
    cooking_time = data.get("cookingTime", "")

    if not ingredients:
        return jsonify({"error": "Ingredients required"}), 400

    # Build a more detailed prompt based on all parameters
    prompt_parts = [f"Create a recipe using these ingredients: {ingredients}."]

    if dietary:
        prompt_parts.append(f"The recipe should be {dietary}.")

    if meal_type:
        prompt_parts.append(f"This should be a {meal_type} recipe.")

    if cuisine:
        prompt_parts.append(f"Use {cuisine} cuisine style.")

    if cooking_time:
        prompt_parts.append(f"The recipe should take {cooking_time} to prepare.")

    prompt_parts.append(
        "Format the response with a creative recipe name, ingredients list with measurements, step-by-step instructions, and nutritional information if possible."
    )

    prompt = " ".join(prompt_parts)

    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "You are a professional chef and nutrition expert. Provide detailed, creative recipes that are both delicious and aligned with the user's dietary needs. Include preparation steps, cooking times, and serving suggestions.",
                },
                {"role": "user", "content": prompt},
            ],
        )
        content = response.choices[0].message.content
        if content is None:
            return jsonify({"error": "No content returned from OpenAI"}), 500
        return jsonify({"recipe": content.strip()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/save-recipe", methods=["POST"])
def save_recipe():
    # This would connect to a database in a real implementation
    data = request.json
    recipe_data = data.get("recipe", "")
    # In a real app, you'd authenticate users
    user_id = data.get("userId", "anonymous")

    # Here you would save to a database
    # For now, we'll just return success
    return jsonify({"success": True, "message": "Recipe saved successfully"})


@app.route("/api/user-recipes", methods=["GET"])
def get_user_recipes():
    # This would fetch from a database in a real implementation
    # For now, return dummy data
    user_id = request.args.get("userId", "anonymous")

    # Dummy recipes
    recipes = [
        {
            "id": "1",
            "title": "Chicken Stir Fry",
            "ingredients": ["chicken", "vegetables", "rice"],
            "instructions": "Cook everything together",
            "created_at": "2023-04-01",
        },
        {
            "id": "2",
            "title": "Vegetable Pasta",
            "ingredients": ["pasta", "tomatoes", "zucchini"],
            "instructions": "Boil pasta, sauté vegetables, combine",
            "created_at": "2023-04-02",
        },
    ]

    return jsonify({"recipes": recipes})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
