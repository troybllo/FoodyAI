import ThreeScene from "@/components/ThreeScene";
import GenerateRecipe from "@/pages/GenerateRecipe";

export default function Home() {
  return (
    <div className="min-h-screen text-black">
      <section className="container mx-auto pt-20 pb-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-300">
              AI-Powered Recipe Discovery
            </h1>
            <p className="text-xl mb-8 text-black">
              Transform your available ingredients into delicious meals with our
              AI recipe generator. Perfect for busy weeknights, dietary
              restrictions, or culinary exploration.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-300 rounded-full font-medium hover:from-gray-700 hover:to-gray-300 transition duration-300 shadow-lg">
                Try Now
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <ThreeScene />
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Input Ingredients",
                description:
                  "Enter ingredients you have on hand, separated by commas.",
                icon: "🥕",
              },
              {
                title: "Specify Preferences",
                description:
                  "Add dietary restrictions and meal types to customize results.",
                icon: "🍽️",
              },
              {
                title: "Get Personalized Recipes",
                description:
                  "Our AI generates a complete recipe tailored to your inputs.",
                icon: "✨",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Generate Your Recipe
          </h2>
          <div className="max-w-3xl mx-auto  rounded-2xl shadow-2xl p-8">
            <GenerateRecipe />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to explore more recipes?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create an account to save your favorite recipes and get personalized
            recommendations.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition duration-300 shadow-lg">
            Sign Up Free
          </button>
        </div>
      </section>
    </div>
  );
}
