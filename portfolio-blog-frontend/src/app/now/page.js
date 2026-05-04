import { genPageMetadata } from "@/lib/seo";
import NowClient from "./NowClient";

export const metadata = genPageMetadata({ title: "Now" });

export default function Now() {
  return <NowClient />;
}
