export const UserRolesNames = Object.freeze({
    UPLOADER: 'uploader',
    APPROVER: 'approver',
    ADMIN: 'admin',
    SUPERADMIN: 'superadmin'
});

export const UserRoles = {
    uploader: {
        permittedRoles: [ UserRolesNames.UPLOADER ]
    },
    approver: {
        permittedRoles: [ UserRolesNames.APPROVER]
    },
    admin: {
        permittedRoles: [ UserRolesNames.ADMIN, UserRolesNames.SUPERADMIN ]  // The Admin can assign the user to be an uploader or approver
    },
    superadmin: {
        permittedRoles: [ UserRolesNames.SUPERADMIN ]
        // The super Admin will be to assign the user to be an Admin or the uploader or the approver
    },
};
