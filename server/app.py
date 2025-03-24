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

    if not ingredients:
        return jsonify({"error": "Ingredients required"}), 400

    prompt = f"Create a {dietary} {meal_type} recipe using the following ingredients: {ingredients}. Format the response as a clean recipe with title, ingredients, and steps."

    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a recipe expert AI."},
                {"role": "user", "content": prompt},
            ],
        )
        content = response.choices[0].message.content
        if content is None:
            return jsonify({"error": "No content returned from OpenAI"}), 500

        return jsonify({"recipe": content.strip()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
   app.run(debug=True, host="0.0.0.0", port=5000)
