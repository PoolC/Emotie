import { Redirect } from "react-router-dom";

const isMaster = false;  // Master Condition

export const forAuthorized = (requiredPage, currentAuthState) => {
    const isAuthUnknown = (currentAuthState === '');
    const isAuthValid = (currentAuthState === 'AUTHORIZED');

    if (isAuthUnknown || isAuthValid || isMaster) return requiredPage;
    else return () => <Redirect to="/login"/>;
}

export const forUnauthorized = (requiredPage, currentAuthState) => {
    const isAuthUnknown = (currentAuthState === '');
    const isAuthValid = (currentAuthState === 'UNAUTHORIZED') || (currentAuthState === 'FAILED') || (currentAuthState === 'EXPIRED');

    if (isAuthUnknown || isAuthValid || isMaster) return requiredPage;
    else return () => <Redirect to="/feed"/>;
}

export const forAdmin = (requiredPage, currentAuthState) => {
    const isAuthUnknown = (currentAuthState === '');
    const isAuthValid = (currentAuthState === 'ADMIN');

    if (isAuthUnknown || isAuthValid || isMaster) return requiredPage;
    else return () => <Redirect to="/"/>;
}