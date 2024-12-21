import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <>
    <div className="app-wrapper">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
    </>
  )
}

export default App
