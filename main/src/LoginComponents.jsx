import { PasswordInput, SimpleForm, TextInput, useDataProvider, useNotify } from "react-admin";


// Create a new user account in pb
export const CreateAccount = () => {
    const dataProvider = useDataProvider();
    const notify = useNotify();

    const handleCreate = async (data) => {
        const AccData = {
            "username": data.username,
            "email": data.email,
            "password": data.password,
            "passwordConfirm": data.passwordConfirm,
            "Name": data.Name,
            "Surname": data.Surname
        };

        try {
            await dataProvider.create('users', {
                data: AccData
            });
            notify('User account created: ', AccData.username);
        } catch (error) {
            console.error('Error creating user account: ', error);
            notify('Username or email may already be in use: ', error);
        };
    };

    return (
        <SimpleForm onSubmit={handleCreate}>
            <TextInput source="Name" label="First Name(s)" />
            <TextInput source="Surname" label="Last Name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <PasswordInput source="password" />
            <PasswordInput source="passwordConfirm" />
        </SimpleForm>
    )
};

// Change or update user password
export const ChangePassword = () => {
    const dataProvider = useDataProvider();
    const notify = useNotify();

    const handleChange = async (data) => {
        const NewPassowrd ={
            "username": data.username,
            "password": data.password,
            "passwordConfirm": data.passwordConfirm
        }

        try {
            await dataProvider.update('users', {
                id: data.id,
                data: NewPassowrd
            });
            notify('Password updated for: ', data.username);
        } catch (error) {
            console.error('Error updating password: ', error);
            notify('Error updating password: ', error);
        }
    };

    return (
        <SimpleForm onSubmit={handleChange}>
            <TextInput source="username" />
            <PasswordInput source="password" />
            <PasswordInput source="passwordConfirm" />
        </SimpleForm>
    )
};