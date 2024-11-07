import React from 'react';
import { Create, Datagrid, FileField, FileInput, FunctionField, List, SelectInput, useShowContext } from 'react-admin';
import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const CustomTitle = () => {
    const { record } = useShowContext();
    return <span>{record ? `${record.Applicant.Name || ''} ${record.Applicant.Surname || ''} ${'Application'}` : ''}</span>;
};

export const ApplicationList = () => (
    <List>
        <Datagrid>
            <TextField source="Status" />
            <ReferenceField source="Course_Choice" reference="courses" >
                <TextField source="Name" />
            </ReferenceField>
            <ReferenceField source="Faculty_Choice" reference="faculties" >
                <TextField source="Name" />
            </ReferenceField>
            <ReferenceField source="Applicant" reference="users" label="Name">
                <FunctionField render={record => `${record.Name} ${record.Surname}`} />
            </ReferenceField>
            <DateField source="created" />
        </Datagrid>
    </List>
);

// Fix Show Title
export const ApplicationShow = (props) => (
    <Show {...props} title={<CustomTitle />}>
        <SimpleShowLayout>
            <TextField source="id" label="Application ID" />
            <ReferenceField source="Applicant" reference="users" label="Applicant ID">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="Applicant" reference="users" label="Name">
                <FunctionField render={record => `${record.Name} ${record.Surname}`} />
            </ReferenceField>
            <ReferenceField source="Faculty_Choice" reference="faculties" label="Faculty Choice">
                <TextField source="Name" />
            </ReferenceField>
            <ReferenceField source="Course_Choice" reference="courses" label="Course Choice">
                <TextField source="Name" />
            </ReferenceField>
            <FileField source="Past_Results" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

// Add automation depending on the status of the application
// Fix the reference fields to show the actual data
export const ApplicationEdit = () => {

    return (
        <Edit>
            <SimpleForm>
                <SelectInput id="Status"
                    source="Status" defaultValue={'Pending'}
                    choices={[
                        { id: 'Pending', name: 'Pending' },
                        { id: 'Accepted', name: 'Accepted' },
                        { id: 'Rejected', name: 'Rejected' },
                    ]}
                />
                <TextInput source="id" label="Application ID" disabled />
                <ReferenceInput source='Applicant' reference='users' >
                    <TextInput source='id' label="Applicant ID" disabled />
                </ReferenceInput>
                <ReferenceInput source="Faculty_Choice" reference="faculties" >
                    <TextInput source="Name" label="Faculty Choice" />
                </ReferenceInput>
                <ReferenceInput source="Course_Choice" reference="courses" >
                    <TextInput source="Name" label="Course Choice" />
                </ReferenceInput>
                <FileInput source="Past_Results" disabled />
            </SimpleForm>
        </Edit>
    );
};

export const ApplicationCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="Applicant" reference="users" label="Applicant ID">
                <TextInput source="id" disabled />
            </ReferenceInput>
            <ReferenceField source="Name" reference="users" label="Name">
                <FunctionField render={record => `${record.Name} ${record.Surname}`} />
            </ReferenceField>
            <ReferenceField source="Faculty_Choice" reference="faculties" label="Faculty Choice">
                <TextField source="Name" />
            </ReferenceField>
            <DateInput source="Past_Results" />
            <DateInput source="Status" />
            <ReferenceInput source="collectionId" reference="collections" />
            <TextInput source="collectionName" />
            <DateInput source="created" />
            <TextInput source="id" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);