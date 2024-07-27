import Image from "next/image";
import { Target } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function EasyUse() {
  return (
    <div className="max-container my-4 flex flex-col items-center">
      <div className="flex items-center justify-center mt-4 mb-2">
        <Target size={28} />
        <p className="ml-2 text-4xl font-semibold">Make videos faster</p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-10">
        <CardContainer className="inter-var" containerClassName="py-4">
          <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl border">
            <CardItem translateZ="100" className="w-full">
              <Image
                src="https://nvahzazenzjsisbjthhb.supabase.co/storage/v1/object/public/assets/landing-page/easy-to-use.gif"
                height="297"
                width="600"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl p-2"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <ul className="list-disc flex flex-col gap-y-4 ml-2">
          <li className="text-xl font-medium ">Select a template</li>
          <li className="text-xl font-medium">
            Change inputs as per your requirements
          </li>
          <li className="text-xl font-medium">
            Download the animation as video
          </li>
        </ul>
      </div>
    </div>
  );
}
