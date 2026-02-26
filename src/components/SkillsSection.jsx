import { useState } from "react";
import {cn} from "@/lib/utils";
const skills = [
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },

  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "PostgreSQL", level: 65, category: "Backend" },
  { name: "GraphQL", level: 60, category: "Backend" },

  { name: "Python", level: 85, category: "AIML" },
  { name: "TensorFlow", level: 75, category: "AIML" },
  { name: "PyTorch", level: 70, category: "AIML" },
  { name: "Scikit-learn", level: 80, category: "AIML" },
  { name: "Pandas", level: 90, category: "AIML" },
  { name: "NumPy", level: 85, category: "AIML" },

  { name: "ChatGPT", level: 90, category: "GenAI" },
  { name: "RAG (Retrieval-Augmented Generation)", level: 80, category: "GenAI" },

  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
];


const categories = ["all", "Frontend", "Backend", "AIML", "GenAI", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-card p-6 rounded-xl 
                         shadow-xs hover:shadow-xl
                         transition-all duration-300 
                         hover:-translate-y-2 hover:scale-105
                         hover:opacity-95"
            >
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">
                  {skill.name}
                </span>
              </div>

              <div className="w-full bg-secondary/50 rounded-full overflow-hidden h-2">
                <div
                  className="bg-primary h-2 rounded-full 
                             transition-all duration-500
                             group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)]
                             group-hover:brightness-125"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <span
                className="absolute bottom-3 right-4 text-sm text-muted-foreground 
                           transition-all duration-300 
                           group-hover:text-primary"
              >
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
