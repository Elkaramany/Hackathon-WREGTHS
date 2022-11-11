declare module '@env' {
    export const API_URL: string;
    export const GOOGLE_WEB_CLIENT_ID: string;
    export const GOOGLE_IOS_CLIENT_ID: string;
}

declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}