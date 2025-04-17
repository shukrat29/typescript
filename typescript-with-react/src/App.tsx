import Header from "./components/Header.tsx";
import profileImage from "./assets/profile.jpg";
import { CourseGoals } from "./components/CourseGoals.tsx";
import { useState } from "react";
import { NewGoal } from "./components/NewGoal.tsx";

const App = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Learn typescript",
      description: "Learn ts from basic and understand how typescript works",
    },
    {
      id: 2,
      title: "Practice typescript",
      description: "Learn ts from basic and understand how typescript works",
    },
  ]);

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  };

  const handleAddGoal = (text: string, summary: string) => {
    setGoals((prevGoals) =>
      prevGoals.concat({ id: Math.random(), title: text, description: summary })
    );
  };

  return (
    <main>
      <Header image={{ src: profileImage, alt: "Profile Picture" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAdd={handleAddGoal} />
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
};

export default App;
