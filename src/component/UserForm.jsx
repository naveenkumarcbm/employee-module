import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import APP_CONFIG from '../config';
import { Link } from 'react-router-dom';

const UserForm = ({ onSubmit, onCancel, userData }) => {
    const onFinish = (values) => {
        if(userData){
            onSubmit({...userData, ...values}, true)
        } else {
            onSubmit(values);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <h2>{!userData? 'Create' : 'Edit'} Employee</h2>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={userData? userData : {}}
            >
                {APP_CONFIG.fields.map(fld => (
                    <Form.Item
                        key={fld.key}
                        label={fld.lable}
                        name={fld.key}
                        rules={[
                            {
                                required: true,
                                message: `Please input your ${fld.lable}!`,
                            },
                        ]}
                    >
                        <Input type={fld.type} />
                    </Form.Item>

                ))}


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button onClick={() =>onCancel(true)} style={{ marginLeft: 10 }} htmlType="submit">
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default UserForm;