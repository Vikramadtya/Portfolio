import { genPageMetadata } from "@/lib/seo";
import NowClient from "@/components/now/NowClient";

export const metadata = genPageMetadata({ title: "Now" });

export default function Now() {
  return <NowClient />;
}
