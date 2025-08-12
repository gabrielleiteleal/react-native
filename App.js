import Routes from './src/routes';
import { FavoritesProvider } from './src/contexts';

export default function App() {
  return (
    <FavoritesProvider>
      <Routes />
    </FavoritesProvider>

  )
}