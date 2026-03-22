import yellowFlowers from "@/assets/yellow-flowers.png";
import FallingPetals from "@/components/FallingPetals";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <FallingPetals />

      {/* Soft radial glow background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, hsla(43, 100%, 70%, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        {/* Eyebrow */}
        <p className="animate-fade-in-up text-sm tracking-[0.3em] uppercase text-golden-deep/70 font-body mb-6">
          22 de marzo · Día de las Flores Amarillas
        </p>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-200 font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-foreground text-center text-balance leading-[1.1] max-w-3xl">
          Para ti, aunque estés lejos
        </h1>

        {/* Flower image */}
        <div className="animate-fade-in-up delay-400 my-10 md:my-14">
          <img
            src={yellowFlowers}
            alt="Ramo de flores amarillas"
            className="w-64 sm:w-80 md:w-96 animate-pulse-glow drop-shadow-2xl"
          />
        </div>

        {/* Love message */}
        <div className="animate-fade-in-up delay-600 max-w-lg text-center space-y-5">
          <p className="text-xl sm:text-2xl md:text-3xl font-body text-foreground/90 italic leading-relaxed">
            "La distancia no apaga lo que el corazón siente. 
            Hoy las flores amarillas cruzan fronteras solo para decirte…"
          </p>
        </div>

        <p className="animate-fade-in-up delay-800 mt-8 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-golden-deep text-center">
          Te quiero mucho 💛
        </p>

        {/* Heart */}
        <div className="animate-fade-in-up delay-1000 mt-10">
          <span className="text-5xl animate-heartbeat inline-block">🌻</span>
        </div>

        {/* Footer note */}
        <p className="animate-fade-in-up delay-1200 mt-16 text-sm text-muted-foreground font-body tracking-wide">
          Con todo mi cariño, desde donde sea que esté mi corazón 💌
        </p>
      </main>
    </div>
  );
};

export default Index;
