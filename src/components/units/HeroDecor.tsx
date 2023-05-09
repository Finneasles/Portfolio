import {
  AboutDecorComponent,
  HomeDecorComponent,
  ProjDecorComponent,
  PubDecorComponent,
} from "@/components";

const Component = ({ src }: { src?: string }) => {
  return src === "about" ? (
    <AboutDecorComponent />
  ) : src === "proj" ? (
    <ProjDecorComponent />
  ) : src === "pub" ? (
    <PubDecorComponent />
  ) : (
    <HomeDecorComponent />
  );
};

export default Component;
