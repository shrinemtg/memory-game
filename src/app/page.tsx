import Image from "next/image";
import styles from "./page.module.css";
import Trump from "@/components/trump";
import Test from "@/components/test";

export default function Home() {
  return (
    <>
      <Test />
      <Trump />
    </>
  );
}
