import { useState } from "react";
import { Fireworks } from "@fireworks-js/react";

type AgeSelectorProps = {
  name: string;
};

export default function AgeSelector({
  name,
}: AgeSelectorProps) {
  const [isPreferringNotToSay, setIsPreferringNotToSay] =
    useState<boolean>(false);

  const top = isPreferringNotToSay ? "Happy Birthday" : "Happy";
  const bottom = isPreferringNotToSay ? name : "Birthday"

  return (
    <>
      <h2
        className={`uppercase text-4xl font-bold tracking-tighter transition-colors duration-1000 ${
          isPreferringNotToSay ? "text-white" : "text-black"
        }`}
      >
        {top}
      </h2>
      <select
        onChange={(e) =>
          (e?.target?.value === "prefer-not-to-say") !== isPreferringNotToSay &&
          setIsPreferringNotToSay((v) => !v)
        }
        defaultValue=""
        className="w-64 max-w-[calc(100%-40px)] mx-5 bg-gray-200 border-black border-2"
      >
        <option value="" disabled className="hidden">
          Please select age
        </option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="prefer-not-to-say">Prefer not to say</option>
      </select>
      <h2
        className={`uppercase text-4xl font-bold tracking-tighter transition-colors duration-1000 ${
          isPreferringNotToSay ? "text-white" : "text-black"
        }`}
      >
        {bottom}
      </h2>
      <Fireworks
        autostart={isPreferringNotToSay}
        key={String(isPreferringNotToSay)}
        options={{
          rocketsPoint: {
            min: 25,
            max: 75,
          },
          acceleration: 1,
        }}
        className={`inset-0 -z-10 ${
          isPreferringNotToSay ? "bg-black" : "bg-white"
        } fixed transition-colors duration-1000`}
      />
    </>
  );
}
