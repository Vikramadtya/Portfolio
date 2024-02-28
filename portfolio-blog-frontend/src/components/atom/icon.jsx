import Dog from "../../../public/dog.svg";
import Congrats from "../../../public/congrats.svg";
import PartyingFace from "../../../public/partying-face.svg";

const components = {
  dog: Dog,
  congrats: Congrats,
  partyingFace: PartyingFace,
};

const Icon = ({ kind, size }) => {
  const IconSvg = components[kind];
  return (
    <>
      <i className={`inline-block`}>
        <IconSvg className={`h-4 w-4`} width={size} height={size} />
      </i>
    </>
  );
};

export default Icon;
