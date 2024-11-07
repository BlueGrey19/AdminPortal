import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser, radiantDarkTheme } from 'react-admin';
import { PocketBaseProvider } from './ra-pocketbase';
import { CourseList, CourseShow } from './CourseCat';
import { ApplicationEdit, ApplicationList, ApplicationShow } from './Applications';

const pbProvider = PocketBaseProvider("https://ghastly-owl-6wwwv56gp6xh464p-8090.app.github.dev")

const App = () => (
  <Admin
    dataProvider={pbProvider.dataProvider}
    theme={radiantDarkTheme}
    title={'Admin Portal'}
  >
    <Resource name='courses'
      list={CourseList} show={CourseShow}
      edit={EditGuesser}
      options={{ label: 'Course Catalogue', labelPlural: 'Courses' }}
    />
    <Resource name='applications'
      list={ApplicationList} show={ApplicationShow}
      edit={ApplicationEdit}
      options={{ label: 'Applications', labelPlural: 'Applications' }}
    />
    <Resource name='module_reg'
      list={ListGuesser} show={ShowGuesser}
      edit={EditGuesser}
      options={{ label: 'Module Registration', labelPlural: 'Module_regs' }}
    />
    <Resource name='marks'
      list={ListGuesser} show={ShowGuesser}
      edit={EditGuesser}
      options={{ label: 'Grade Book', labelPlural: 'Marks' }}
    />
  </Admin>
);

export default App;