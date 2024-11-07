import { ChipField, Create, Datagrid, List, NumberField, ReferenceArrayField, ReferenceField, SingleFieldList, TextField } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';

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

// Make a Create function to allow admins to make new courses
// Look at making module seletion a multi-select
export const CourseCreate = () => (
    <Create>

    </Create>
);