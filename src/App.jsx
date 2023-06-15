import Main from './components/Main/Main'
import { globalContext as GlobalContext } from "./components/contexts/globalContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";


function App() {
  const initialState = {
    list: [],
  };

  const [state, dispatch] = useLocalStorage("list", initialState);

  return( 
    <GlobalContext.Provider value={{ state, dispatch }}>
    <Header/>
     <div className="App">meow</div>;
     <Main/>
     <Footer/>
  </GlobalContext.Provider>
  );
}
export default App;
