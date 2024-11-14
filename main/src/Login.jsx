import React, { useState } from "react";
import { Login } from "react-admin";
import { CardActions, Typography, Button } from "@mui/material";
import { ChangePassword, CreateAccount } from "./LoginComponents";

const LoginScreen = (props) => {
    const [showCreateAccount, setShowCreateAccount] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);

    const toggleCreateAcc = () => {
        setShowCreateAccount(!showCreateAccount);
        setShowResetPassword(false); // Ensure reset password form is hidden
    };

    const togglePassReset = () => {
        setShowResetPassword(!showResetPassword);
        setShowCreateAccount(false); // Ensure create account form is hidden
    };

    const toggleForm = () => {
        setShowCreateAccount(false);
        setShowResetPassword(false);
    };

    return (
        <div>
            {!showCreateAccount && !showResetPassword ? (
                <Login {...props}>
                    {/* Keeping the default login form from React Admin*/}
                    <LoginForm />
                    <CardActions style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '20px' }}>
                        <Typography variant="body2" style={{ marginBottom: '10px', textAlign: 'center' }}>
                            Don't have an account? <br />
                        </Typography>
                        <Button
                            onClick={toggleCreateAcc} // Switch to create account form when clicked
                            color="primary"
                            variant="outlined"
                        >
                            Create New Account
                        </Button>
                        <Button
                            onClick={togglePassReset} // Switch to reset password form when clicked
                            color="primary"
                            variant="outlined"
                        >
                            Forgot Password?
                        </Button>
                    </CardActions>
                </Login>
            ) : showCreateAccount ? (
                <div {...props} style={{ margin: '2em' }}>
                    {/* Display the create account form */}
                    <Typography variant="h5" gutterBottom>
                        Create a New Account
                    </Typography>
                    <CreateAccount />
                    <Button onClick={toggleForm} color="primary" variant="outlined" style={{ marginTop: '20px' }}>
                        Back to Login
                    </Button>
                </div>
            ) : (
                <div {...props} style={{ margin: '2em' }}>
                    {/* Display the reset password form */}
                    <Typography variant="h5" gutterBottom>
                        Reset Password
                    </Typography>
                    <ChangePassword />
                    <Button onClick={toggleForm} color="primary" variant="outlined" style={{ marginTop: '20px' }}>
                        Back to Login
                    </Button>
                </div>
            )}
        </div>
    );
};
export default LoginScreen;