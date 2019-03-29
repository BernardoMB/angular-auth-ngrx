export interface IAccount {
    disclaimerVer: string;
    disclaimerAccepted: boolean;
    isPhoneVerified: boolean;
    userRole: string;
    docVerificationStatus: string;
    hasIDVerified: boolean;
    isVerified: boolean;
    firstName: string;
    lastName: string;
    secondLastName: string;
    dateOfBirth: Date;
    gender: string;
    lang: string;
    country: string;
    phone: string;
    email: string;
    username: string;
    accountNumber: number;
    postalCode: string;
    truliooTxId1: string;
    truliooTxId2: string;
}