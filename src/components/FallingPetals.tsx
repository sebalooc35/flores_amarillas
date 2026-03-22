import { useMemo } from "react";

const FallingPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 10 + Math.random() * 16,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 10,
      reverse: Math.random() > 0.5,
      opacity: 0.4 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((p) => (
        <div
          key={p.id}
          className={p.reverse ? "animate-float-petal-reverse" : "animate-float-petal"}
          style={{
            position: "absolute",
            left: p.left,
            top: 0,
            width: p.size,
            height: p.size,
            borderRadius: "50% 0 50% 50%",
            background: `hsl(${45 + Math.random() * 10}, ${85 + Math.random() * 15}%, ${62 + Math.random() * 15}%)`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingPetals;
