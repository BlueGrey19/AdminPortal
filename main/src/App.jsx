import { Admin, Resource, radiantDarkTheme } from 'react-admin';
import { PocketBaseProvider } from './ra-pocketbase';

const pb = PocketBaseProvider("https://ghastly-owl-6wwwv56gp6xh464p-8090.app.github.dev/")

const App = () => {
  <Admin
  dataProvider = {pb.dataProvider}
  // authProvider = {pb.authProvider}
  theme = {radiantDarkTheme}
  title = {'Admin Portal'}
  >
    <Resource />
  </Admin>
};

export default App;