import { Avatar } from 'antd';
import React from 'react'

const APP_CONFIG = {
    fields: [
        {
            id: 'fname',
            lable: 'First name',
            key: 'fname'
        },
        {
            id: 'lname',
            lable: 'Last name',
            key: 'lname'
        },
        {
            id: 'dob',
            lable: 'DOB',
            key: 'dob',
            type: 'date'
        },
        {
            id: 'designation',
            lable: 'Designation',
            key: 'designation'
        },
        {
            id: 'profileLink',
            lable: 'Profile Picture Link',
            key: 'profileLink',
            type: 'url'
        },
        {
            id: 'experience',
            lable: 'Experience',
            key: 'experience',
            type: 'number'
        }
    ],
    columns: [
        {
            title: 'Profile',
            dataIndex: 'profileLink',
            render: (val) => <Avatar src={val} />

        },
        {
            title: 'First Name',
            dataIndex: 'fname',
            key: 'fname',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Last Name',
            dataIndex: 'lname',
            key: 'lname',
            render: text => <a>{text}</a>,
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            key: 'dob',
        },
        {
            title: 'Designation',
            dataIndex: 'designation',
            key: 'designation',
        }
    ]
}

export default APP_CONFIG;