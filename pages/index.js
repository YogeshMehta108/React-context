import Main from "../components/Main";
import { usePlaceContext } from "../context/Places";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { places } = usePlaceContext();
  return (
    <div className={styles.container}>
      This is main page - {JSON.stringify(places)}
      <Main />
    </div>
  );
}
