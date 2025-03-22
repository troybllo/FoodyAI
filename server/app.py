from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route("/api/generate-recipe", methods=["POST"])
def generate_recipe():
    data = request.json
    if not data or "prompt" not in data:
        return jsonify({"error": "Missing prompt"}), 400

    user_prompt = data["prompt"]

    try:
        response = openai.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a recipe expert AI."},
                {"role": "user", "content": user_prompt},
            ],
        )
        content = response.choices[0].message.content
        if content is None:
            return jsonify({"error": "No content returned from OpenAI"}), 500

        recipe = content.strip()
        return jsonify({"recipe": recipe})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
