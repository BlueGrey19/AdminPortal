import { Datagrid, DateField, FunctionField, List, ReferenceField, SelectInput, TextField } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const Module_regList = () => (
    <List>
        <Datagrid>
            <TextField source="Student" label="Student No." />
            <ReferenceField source="Student" reference="students" label="Name">
                <ReferenceField source="User" reference="users">
                    <FunctionField render={record => `${record.Name} ${record.Surname}`} />
                </ReferenceField>
            </ReferenceField>
            <ReferenceField source="Course" reference="courses">
                <TextField source="Name" />
            </ReferenceField>
            <ReferenceField source="Module_1" reference="modules">
                <TextField source="Name" />
            </ReferenceField>
            <ReferenceField source="Module_2" reference="modules">
                <TextField source="Name" />
            </ReferenceField>
            <ReferenceField source="Module_3" reference="modules">
                <TextField source="Name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const Module_regShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="Student" label="Student No." />
            <ReferenceField source="Student" reference="students" label="Full Student Name">
                <ReferenceField source="User" reference="users">
                    <FunctionField render={record => `${record.Name} ${record.Surname}`} />
                </ReferenceField>
            </ReferenceField>
            <ReferenceField source="Course" reference="courses">
                <TextField source="Name" />
            </ReferenceField>
            <ReferenceField source="Course" reference="courses" label="Faculty">
                <ReferenceField source="Faculty" reference="faculties">
                    <TextField source="Name" />
                </ReferenceField>
            </ReferenceField>
            <ReferenceField source="Module_1" reference="modules">
                <TextField source="Name" />
            </ReferenceField>
            <ReferenceField source="Module_2" reference="modules">
                <TextField source="Name" />
            </ReferenceField>
            <ReferenceField source="Module_3" reference="modules">
                <TextField source="Name" />
            </ReferenceField>
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

export const Module_regEdit = () => (
    // Add creation of 3 respective records for marks
    // Each module must have it's own record 
    <Edit>
        <SimpleForm>
            <TextInput source="Student" disabled />
            <TextInput source="Course" disabled />
            <ReferenceInput source="Module_1" reference="modules" label="Module 1">
                <SelectInput source="id" optionText={"Name"} />
            </ReferenceInput>
            <ReferenceInput source="Module_2" reference="modules" label="Module 2">
                <SelectInput source="id" optionText={"Name"} />
            </ReferenceInput>
            <ReferenceInput source="Module_3" reference="modules" label="Module 3">
                <SelectInput source="id" optionText={"Name"} />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);