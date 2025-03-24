import ThreeScene from "@/components/ThreeScene";
import GenerateRecipe from "@/pages/GenerateRecipe";

export default function Home() {
  return (
    <div className="flex flex-col justify-content items-center align-middle mt-16">
      <div>
        <h1 className="text-7xl italic text-center whitespace-pre-wrap">
          Time to find new recipes for you!
        </h1>
      </div>
      <div>
        <ThreeScene />
      </div>
      <div>
        <GenerateRecipe />
      </div>
    </div>
  );
}
