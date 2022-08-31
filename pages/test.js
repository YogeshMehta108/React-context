import Head from "next/head";
import Image from "next/image";
import { usePlaceContext } from "../context/Places";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { places } = usePlaceContext();
  return (
    <div className={styles.container}>
      This is test page - {JSON.stringify(places)}
    </div>
  );
}
