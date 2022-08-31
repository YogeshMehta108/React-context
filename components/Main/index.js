import { usePlaceContext } from "../../context/Places";

import styles from "./Main.module.css";

export default function Main() {
  const { places } = usePlaceContext(); //These are the Places 
  return <div className={styles.place_row}>{JSON.stringify(places)}</div>;
}
