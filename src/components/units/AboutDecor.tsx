import { useEntryEffect } from "@/hooks";

const Component = () => {
  const { position: dec1 } = useEntryEffect({
    delay: 10,
    initialPosition: 1000,
    finalPosition: 0,
  });

  const { position: dec2 } = useEntryEffect({
    delay: 100,
    initialPosition: 200,
    finalPosition: 0,
  });

  const { position: dec3 } = useEntryEffect({
    delay: 100,
    initialPosition: -200,
    finalPosition: 0,
  });

  const { position: dec4 } = useEntryEffect({
    delay: 400,
    initialPosition: -400,
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
      <div
        style={{
          transform: `translateX(${dec2}%)`,
        }}
        className="flex content-center items-center justify-center text-[24rem] transition-transform "
      >
        <p
          style={{
            transform: `translateX(-${dec3}%) translateY(${dec3}%)`,
          }}
          className="absolute text-[12rem] transition-transform"
        >
          🤠
        </p>
        <div
          className="absolute"
          style={{
            transform: `translateX(${dec4}%) translateY(${dec4}%)`,
          }}
        >
          <p className="absolute top-[-192px] right-[-192px] text-[8rem] transition-transform">
            💬
          </p>
        </div>
      </div>
    </div>
  );
};

export default Component;
