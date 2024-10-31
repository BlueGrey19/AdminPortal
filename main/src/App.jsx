import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser, radiantDarkTheme } from 'react-admin';
import { PocketBaseProvider } from './ra-pocketbase';

const pbProvider = PocketBaseProvider("https://ghastly-owl-6wwwv56gp6xh464p-8090.app.github.dev/")

const App = () => {
  <Admin
    dataProvider={pbProvider.dataProvider}
    authProvider={pbProvider.authProvider}
    theme={radiantDarkTheme}
    title={'Admin Portal'}
  >
    <Resource name='courses' list={ListGuesser} show={ShowGuesser} edit={EditGuesser} />
    <Resource name='applications' list={ListGuesser} show={ShowGuesser} edit={EditGuesser} />
    <Resource name='module_reg' list={ListGuesser} show={ShowGuesser} edit={EditGuesser} />
    <Resource name='marks' list={ListGuesser} show={ShowGuesser} edit={EditGuesser} />
  </Admin>
};

export default App;