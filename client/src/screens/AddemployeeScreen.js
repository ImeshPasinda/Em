import { Button, Form, Input, InputNumber, Col, Row, Statistic, message } from 'antd';
import axios from 'axios';
import { useState, useEffect } from "react";


let employeeCount;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const AddemployeeScreen = () => {

  const [employeeCount, setEmployeeCount] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();


  const onFinish = async (values) => {
    try {
      console.log(values.employee);
      const response = await axios.post('http://localhost:8070/api/employee/add', values.employee);
      console.log(response.data); // Display the response from the backend
      success();
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };



  useEffect(() => {
    function getEmployees() {
      axios.get("http://localhost:8070/api/employee/getallemployees").then((res) => {

        console.log(res.data);
        const count = res.data.length;
        setEmployeeCount(count);

      }).catch((err) => {
        console.log(err.message);
      });
    }
    getEmployees();
  }, []);

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Employee added Successfully!',
    });
  };


  return (
    <Row>
      <Col span={12}>
        {contextHolder}
        
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['employee', 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['employee', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['employee', 'age']}
            label="Age"
            rules={[
              {
                type: 'number',
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={['employee', 'address']} label="Address">
            <Input />
          </Form.Item>
          <Form.Item name={['employee', 'portfolioLink']} label="Portfolio Link">
            <Input />
          </Form.Item>
          <Form.Item name={['employee', 'jobPosition']} label="Job Position">
            <Input />
          </Form.Item>
          <Form.Item name={['employee', 'introduction']} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={12}>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Active Employees" value={employeeCount} />
          </Col>
          <Col span={12}>
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
            <Button
              style={{
                marginTop: 16,
              }}
              type="primary"
            >
              Recharge
            </Button>
          </Col>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} loading />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AddemployeeScreen;
