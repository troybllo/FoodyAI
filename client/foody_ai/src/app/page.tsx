import ThreeScene from "@/components/ThreeScene";
import GenerateRecipe from "@/pages/GenerateRecipe";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <section className="container mx-auto pt-16 pb-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-white">
              AI-Powered Recipe Discovery
            </h1>
            <p className="text-xl mb-8 text-gray-200 font-light tracking-wide">
              Transform your available ingredients into delicious meals with our
              AI recipe generator. Perfect for busy weeknights, dietary
              restrictions, or culinary exploration.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-light tracking-wider text-white hover:bg-white/20 transition duration-300">
                Try Now
              </button>
              <button className="px-8 py-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full font-light tracking-wider text-white hover:bg-black/30 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 backdrop-blur-md bg-black/20 p-6 rounded-xl border border-white/10 shadow-2xl">
            <ThreeScene />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wider text-center mb-12">
            How It Works
          </h2>
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
                className="backdrop-blur-xl bg-black/10 border border-white/20 p-6 rounded-xl shadow-2xl hover:bg-black/20 transition duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-light tracking-wider mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wider text-center mb-8">
            Generate Your Recipe
          </h2>
          <div className="max-w-3xl mx-auto backdrop-blur-xl bg-black/30 border border-white/20 rounded-2xl shadow-2xl p-8">
            <GenerateRecipe />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center backdrop-blur-xl bg-black/20 border border-white/10 rounded-xl p-8 max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-3xl font-light tracking-wider mb-4">
            Ready to explore more recipes?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-light">
            Create an account to save your favorite recipes and get personalized
            recommendations.
          </p>
          <button className="px-8 py-3 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full font-light tracking-wider text-white hover:bg-white/20 transition duration-300 shadow-lg">
            Sign Up Free
          </button>
        </div>
      </section>
    </div>
  );
}
