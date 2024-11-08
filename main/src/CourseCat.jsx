import { ChipField, Create, Datagrid, List, NumberField, TabbedForm, TextField, SingleFieldList, TextInput, NumberInput, SelectArrayInput, SelectInput } from 'react-admin';
import { Show, SimpleShowLayout, ReferenceArrayField, ReferenceArrayInput, ReferenceField, ReferenceInput } from 'react-admin';

export const CourseList = () => (
    <List>
        <Datagrid>
            <TextField source="Name" />
            <ReferenceField source="Faculty" reference="faculties" label="Faculty">
                <TextField source="Name" />
            </ReferenceField>
            <TextField source="Level" />
            <NumberField source="Prerequisite_Ave" />
        </Datagrid>
    </List>
);

export const CourseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" label="Course ID" />
            <TextField source="Name" />
            <ReferenceField source="Faculty" reference="faculties" label="Faculty">
                <TextField source="Name" />
            </ReferenceField>
            <TextField source="Level" />
            <NumberField source="Prerequisite_Ave" />
            <ReferenceArrayField source="Modules" reference="modules" label="Associated Modules" >
                <SingleFieldList>
                    <ChipField source="Name" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleShowLayout>
    </Show>
);

// Fix create 
// Record not creating in pb
export const CourseCreate = () => (
    <Create>
        <TabbedForm>
            <TabbedForm.Tab label="Course Information">
                <TextInput source="Name" />
                <ReferenceInput source="Faculty" reference="faculties" >
                    <SelectInput source="Name" label="Faculty" optionText="Name" />
                </ReferenceInput>
                <SelectInput source="Level"
                    choices={[
                        { id: 'Undergrad', name: 'Undergraduate' },
                        { id: 'Postgrad', name: 'Postgraduate' },
                    ]} />
                <NumberInput source="Prerequisite_Ave" />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Modules">
                <ReferenceArrayInput source="Modules" reference="modules" >
                    <SelectArrayInput optionText="Name" />
                </ReferenceArrayInput>
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);