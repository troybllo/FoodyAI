import Image from "next/image";
import fruit1 from "../../assets/fruit1.jpg";
import fruit2 from "../../assets/fruit2.jpg";
import fruit3 from "../../assets/fruit3.jpg";

export default function About() {
  return (
    <div className=" relative flex flex-col gap-24  ">
      <div className="flex flex-row justify-around gap-9 p-6">
        <div className="flex flex-col gap-16">
          <p>
            N: 1024 <br />
            Title: Personalized Recipe Generator <br />
            Cuisine: Global <br />
            Launch: 2025 <br />
            Format: AI-Powered <br />
            Type: Smart suggestions Technique: Adaptive learning <br />
          </p>
          <p>
            Transform everyday ingredients into culinary masterpieces with an{" "}
            <br />
            air of effortless creativity. FoodyAI adapts to your preferences,{" "}
            <br />
            elegantly balancing nutrition and flavor. Each suggestion comes{" "}
            <br />
            meticulously crafted for your pantry's contents, eliminating waste{" "}
            <br />
            while maximizing potential. The algorithm derives from thousands of{" "}
            <br />
            professional recipes, yet maintains a distinctly personal touch.{" "}
            <br />
            Input constraints become creative opportunities, with dietary <br />
            preferences honored without compromising taste. Discover hidden{" "}
            <br />
            culinary talents as unexpected combinations yield surprising <br />
            results. Make mealtime uniquely yours.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <p>
            S: 843 <br />
            Title: Meal Planning Assistant <br />
            Cuisine: Customizable <br />
            Launch: 2025 <br />
            Format: Weekly organization <br />
            Type: Efficiency tool Technique: Predictive analysis <br />
          </p>
          <p>
            Striking the perfect balance between nutritional optimization and{" "}
            <br />
            practical simplicity, it moves with you as a reliable ally. <br />
            Thoughtfully placed suggestion cards distribute workload while{" "}
            <br />
            maintaining a cohesive eating strategy. The planning tool derives{" "}
            <br />
            from behavioral research as a nod to time-saving. Organized weekly{" "}
            <br />
            views secure essentials with a polished interface fluidity and{" "}
            <br />
            streamlined shopping lists. Intelligent substitutions at the <br />
            ingredient level managing to be both practical and still maintain{" "}
            <br />
            that elegant culinary cohesion. Weeknight dinners transform from{" "}
            <br />
            stressful to inspired with minimal effort.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <p>
            E: 756 <br /> Title: Dietary Restriction Navigator <br /> Cuisine:
            Adaptive <br />
            Launch: 2025 <br /> Format: Specialized <br /> Type: Inclusive
            Technique: Constraint satisfaction
          </p>
          <p>
            Designed with meticulous attention to nutritional boundaries and{" "}
            <br />
            topped with an intuitive filtering system. These recipes embody{" "}
            <br />
            culinary ingenuity. Trust algorithm-verified compliance across keto,{" "}
            <br />
            paleo, vegan, and allergy-sensitive requirements without sacrificing{" "}
            <br />
            flavor profiles. The Navigator handles complex intersecting <br />
            restrictions while maintaining depth of flavor and textural <br />
            interest. Each suggestion comes laboratory-tested and user-approved,{" "}
            <br />
            ensuring both safety and satisfaction. Specialized techniques unlock{" "}
            <br />
            flavor potential in limited ingredient pools, proving that <br />
            constraints often produce the most creative solutions.
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 right-8 w-1/3 max-w-3xl text-white p-6 rounded-sm">
        <div className="mt-6 grid grid-cols-3 gap-2 h">
          <div className=" aspect-square">
            <Image
              src={fruit1}
              alt="Design sample"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className=" aspect-square">
            <Image
              src={fruit2}
              alt="Design sample"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="aspect-square">
            <Image
              src={fruit3}
              alt="Design sample"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
