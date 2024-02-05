import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <Icon icon="lucide:home" width="24" height="24" />,
    },
    {
        title: 'Documents',
        path: '/pages/documents',
        icon: <Icon icon="lucide:folder" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            //{ title: 'All', path: '/pages/documents' },
            { title: 'File Explorer', path: '/pages/documents/file-explorer' },
            { title: 'File Upload', path: '/pages/documents/file-upload' },
        ],
    },
    /*{
        title: 'Messages',
        path: '/pages/messages',
        icon: <Icon icon="lucide:mail" width="24" height="24" />,
    },*/
    {
        title: 'Settings',
        path: '/pages/settings',
        icon: <Icon icon="lucide:settings" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            { title: 'Account', path: '/pages/settings/account' },
            { title: 'S3 Config', path: '/pages/settings/s3-config' },
        ],
    },
    {
        title: 'Help',
        path: '/pages/help',
        icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
    },
];