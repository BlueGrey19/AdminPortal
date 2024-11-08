import React from 'react';
import { Create, Datagrid, FileField, FileInput, FunctionField, List, SelectInput, useDataProvider, useNotify, useRecordContext, useShowContext } from 'react-admin';
import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const CustomTitle = () => {
    const { record } = useShowContext();

    // Ensure Applicant, Name, and Surname are properly checked to avoid errors
    const applicantName = record?.Applicant?.Name || '';
    console.log(applicantName);
    const applicantSurname = record?.Applicant?.Surname || '';

    return <span>{record ? `${applicantName} ${applicantSurname} Application` : 'Application'}</span>;
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
            <TextField source="Status" />
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
export const ApplicationEdit = (props) => {
    const dataProvider = useDataProvider();
    // const record = useRecordContext();
    const notify = useNotify();

    // Get value of the new status
    const handleStatusChange = async (event) => {
        const newStatus = event.target.value;
        console.log("New Application status: ", newStatus);
    };

    // Update the status of the application
    const updateStatus = async (data) => {
        try {
            // Depending on new status, different actions will be taken
            if (data.Status === 'Accepted') {
                console.log("App Status: ", data.Status);
                // Applicant becomes a Student
                // data to create student record
                const stuData = {
                    "User": data.Applicant,
                    "Course": data.Course_Choice,
                    "Faculty": data.Faculty_Choice
                };
                console.log("Student Data: ", stuData);
                // Update the status of the application in pb
                await dataProvider.update('applications', {
                    id: data.id,
                    data: { Status: 'Accepted' }
                });
                notify('Application status updated to: ', data.Status);
                // Add user to Student list
                const student = await dataProvider.create('students', {
                    data: stuData
                });
                notify('Student record created');
                // get id of new student record (student num)
                const studentId = student.data.id;
                // data for module registration record
                const modRegData = {
                    "Student": studentId,
                    "Course": data.Course_Choice,
                    "Module_1": "",
                    "Module_2": "",
                    "Module_3": ""
                };
                console.log("Module Registration Data: ", modRegData);
                // Create record on ModReg
                await dataProvider.create('module_reg', {
                    data: modRegData
                });
                notify('Module Registration record created');
            } else if (data.Status === 'Rejected') {
                // No additional actions needed except updating the status
                // Update the status in pb
                await dataProvider.update('applications', {
                    id: data.id,
                    data: { Status: 'Rejected' }
                });
                notify('Application status updated to: ', data.Status);
            } else if (data.Status === 'Pending') {
                // No additional actions needed except updating the status
                // Update the status in pb
                await dataProvider.update('applications', {
                    id: data.id,
                    data: { Status: 'Pending' }
                });
                notify('Application status updated to: ', data.Status);
            }
        } catch (error) {
            console.error("Error updating application status: ", error);
        }
    };

    return (
        <Edit {...props}>
            <SimpleForm onSubmit={updateStatus}>
                <SelectInput id="Status"
                    source="Status" defaultValue={'Pending'}
                    choices={[
                        { id: 'Pending', name: 'Pending' },
                        { id: 'Accepted', name: 'Accepted' },
                        { id: 'Rejected', name: 'Rejected' },
                    ]}
                    onChange={handleStatusChange}
                />
                <ReferenceInput source='Applicant' reference='users' >
                    <TextInput source='id' label="Applicant ID" disabled />
                </ReferenceInput>
                <ReferenceInput source="Faculty_Choice" reference="faculties" >
                    <SelectInput source="Name" label="Faculty Choice" optionText="Name" />
                </ReferenceInput>
                <ReferenceInput source="Course_Choice" reference="courses" >
                    <SelectInput source="Name" label="Course Choice" optionText="Name" />
                </ReferenceInput>
                <FileInput source="Past_Results" disabled />
            </SimpleForm>
        </Edit>
    );
};

export const ApplicationCreate = () => (
    <Create>
        <SimpleForm>
            <SelectInput id="Status"
                source="Status" defaultValue={'Pending'}
                choices={[
                    { id: 'Pending', name: 'Pending' },
                    { id: 'Accepted', name: 'Accepted' },
                    { id: 'Rejected', name: 'Rejected' },
                ]}
                disabled
            />
            <ReferenceInput source="Applicant" reference="users" label="Applicant ID">
                <TextInput source="id" disabled />
            </ReferenceInput>
            <ReferenceField source="Name" reference="users" label="Name">
                <FunctionField render={record => `${record.Name} ${record.Surname}`} />
            </ReferenceField>
            <ReferenceField source="Faculty_Choice" reference="faculties" label="Faculty Choice">
                <SelectInput source="Name" optionText="Name" />
            </ReferenceField>
            <ReferenceField source="Course_Choice" reference="courses" label="Course Choice">
                <SelectInput source="Name" optionText="Name" />
            </ReferenceField>
            <DateInput source="Past_Results" />
        </SimpleForm>
    </Create>
);