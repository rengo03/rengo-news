import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  // Generam endpoint-urile pentru categoriile de stiri.
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 6);
  const businessNewsEndpoint = getNewsCategoriesEndpoint("business", 1, 6);
  // Fetch-uim datele de la The Guardian.
  let technologyData = useFetch(technologyNewsEndpoint);
  let footballData = useFetch(footballNewsEndpoint);
  let businessData = useFetch(businessNewsEndpoint);
  // Adaptam datele de la server la datele necesare componentelor de react.
  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedFootballData = getNewsList(footballData);
  const adaptedBusinessData = getNewsList(businessData);

  return (
    <Layout>
      <section className="my-5">
        <Container>
          <h1 className={styles.h1color}>Tech</h1>
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to="/category/technology" className={styles.link}>
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <h1 className={styles.h1color}>Football</h1>
          <NewsCardList newsList={adaptedFootballData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to="/category/football" className={styles.link}>
              Football
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <h1 className={styles.h1color}>Business</h1>
          <NewsCardList newsList={adaptedBusinessData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to="/category/business" className={styles.link}>
              Business
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <h1 class={styles.h1color}>Favorites</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p>
            Vizitează secțiunea{" "}
            <Link to="/favorites" className={styles.link}>
              Favorites
            </Link>
            . pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
