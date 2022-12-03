import useAppRoutes from "./App.routes";

function App() {
     const routes = useAppRoutes(false);

     return <>{routes}</>;
}

export default App;
