import Image from "next/image";

import Dog from "../../../public/dog.svg";
import Congrats from "../../../public/congrats.svg";
import PartyingFace from "../../../public/partying-face.svg";

const components = {
  dog: Dog,
  congrats: Congrats,
  partyingFace: PartyingFace,
};

const Emoji = (kind) => {
  const emoji = components[kind];
  return (
    <>
      <i className={`inline-block`}>
        <Image src={emoji} className={`h-4 w-4`} />
      </i>
    </>
  );
};

export default Emoji;
