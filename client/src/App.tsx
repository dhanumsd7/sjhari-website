import { Switch, Route } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      {/* Global App */}
      <Router />
    </HelmetProvider>
  );
}