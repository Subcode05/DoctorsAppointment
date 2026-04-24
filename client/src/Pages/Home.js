import React, { useEffect , useState } from "react";
import axios from 'axios';
import Layout from "../components/Layout";
import { Col,  Row } from "antd";
import Doctor from "../components/Doctor"
import { hideLoading, showLoading } from '../redux/alertsSlice';
import { useDispatch } from 'react-redux';
function Home() {

    const [doctors , setDoctors] = useState([]);
    const dispatch =useDispatch();
    const getData = async () => {
        try {
            dispatch(showLoading())
            const response = await axios.get('api/users/get-all-approved-doctors',
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                dispatch(hideLoading())
                if (response.data.success) {
                    setDoctors(response.data.data);
                }

        } catch (error) {
            dispatch(hideLoading())
           
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
    <Layout>
        <Row gutter={20}>
            {doctors.map((doctor) => (
                <Col span={8} xs={24} sm={24} lg={8}>
                        <Doctor doctor={doctor}></Doctor>
                </Col>
            ))}
        </Row>
    </Layout>
    )

}

export default Home;