interface Cred {
    prop: string
    value: number | object | string | null | boolean
}


export const Credential = (dispatch: any, cred: Cred) => {
    dispatch({
        type: 'Credential_In',
        payload: { prop: cred.prop, value: cred.value },
    });
}