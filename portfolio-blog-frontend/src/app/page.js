import Image from "next/image";

import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/atom/alert";
import Greetings from "@/components/organisms/greeting";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Alert className="w-1/3">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Welcome</AlertTitle>
        <AlertDescription>The site is still work in progress</AlertDescription>
      </Alert>

      <Greetings />
    </main>
  );
}
