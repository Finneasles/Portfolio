import { useEntryEffect } from "@/hooks";

const Component = () => {
  const { position: dec1 } = useEntryEffect({
    delay: 10,
    initialPosition: 1000,
    finalPosition: 0,
  });

  const { position: dec2 } = useEntryEffect({
    delay: 100,
    initialPosition: -500,
    finalPosition: 0,
  });
  return (
    <div
      style={{
        transform: `translateX(${dec1}%)`,
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
      className="flex h-[384px] w-[384px] content-center items-center justify-center rounded-[900px] transition"
    >
      <p
        style={{
          transform: `translateY(${dec2}%)`,
        }}
        className="text-[16rem] transition-transform"
      >
        📖
      </p>
    </div>
  );
};

export default Component;
