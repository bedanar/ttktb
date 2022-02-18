import MainPage  from "./pages/MainPage";
import './main.global.css'
import {Container, Div} from './styles'
import { Header } from "./components/Header";
import RouterView from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <Div>
      <Header />
      <Container>
          {/* <RouterView>
          </RouterView> */}
          <MainPage />
      </Container>
      <Footer />
    </Div>
  );
}

export default App;
