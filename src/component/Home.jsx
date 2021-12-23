import { Button, Popconfirm, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import APP_CONFIG from '../config';
import Table from '../shared/table';
import UserForm from './UserForm';

const Home = () => {
    const [ isEdit, setIsEdit ] = useState(false);

    const [ selected, setSelected ] = useState(null);

    const [toggleCraete, setToggleCreate] = useState(false);
    const [employeeList, setEmployeelist] = useState([]);

    useEffect(() => {
        const data = sessionStorage.getItem("employeeList");
       const _list = data? JSON.parse(data) : [];
        setEmployeelist(_list);
    }, [])

    useEffect(() => {
        sessionStorage.setItem("employeeList", JSON.stringify(employeeList));
    }, [employeeList])

    const onToggle = (flag) => {
        setToggleCreate(tgl => !tgl)
        if(flag){
        setIsEdit(false);
        setSelected(null)
        }

    }

    const showEditMode = (record) => {
        setSelected(record)
        setIsEdit(true);
        onToggle();
        console.log(record)
    }

    const onSubmit = (data, isEdit) => {
        if(isEdit) {
            setEmployeelist(_list => {
                return _list.map(emp => {
                    if(emp.id == data.id) return data;
                    else return emp;
                })
            });
        }else {
            data.id = Math.floor(Math.random()*100000000);
            setEmployeelist(_list => {
                return [..._list, data];
            });
        }
        onToggle();
    }

    const confirm = (data) => {
        console.log(data);
        setEmployeelist(_list => {
           return _list.filter(emp => (emp.id !== data.id))
        })
    }

    const actions = [
              {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='link' onClick={() => showEditMode(record)}><a>Edit {record.fname}, {record.lname}</a></Button>
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={() => confirm(record)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ),
        }
    ]

    return (<>
        <h2 className="text-center">User List</h2>
        <>
            <Button style={{ display: toggleCraete ? 'none' : 'block' }} onClick={onToggle}>Craete Employee</Button>
        </>
        {!toggleCraete ? <Table rowKey={"fname"} columns={[...APP_CONFIG.columns, ...actions]} data={employeeList} /> : <UserForm onSubmit={onSubmit} onCancel={onToggle} userData={selected} />}

    </>);
}


export default Home;