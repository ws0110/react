import Banner from "../../components/Banner";
import Row from "../../components/Row";
import Footer from "../../components/Footer";
import requests from "../../api/requests";

function MainPage() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="hTopRated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovies" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" id="CM" fetchUrl={requests.fetchComedyMovies} />
      <Footer />
    </div>
  );
}

export default MainPage;
