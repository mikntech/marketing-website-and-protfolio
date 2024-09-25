import Image from "next/image";

const Icon = ({ mode }: { mode: string }) =>
  mode === "dark" ? (
    <Image
      width={100}
      height={30}
      src="/night.png"
      alt="Picture of the author"
    />
  ) : (
    <Image width={100} height={30} src="/day.png" alt="Picture of the author" />
  );

export default Icon;
