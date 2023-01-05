import './App.css';
import { Card } from 'react-bootstrap';
import React from 'react';
// function App2() {
//     const MyContainer = (
//         <>
//             <h3 className='mb-3'>模拟请求工具</h3>
//             <Row>
//                 {
//                     [['请求地址', 'secondary'],
//                     ['请求方式', 'secondary'],
//                     ['请求标头', 'secondary'],
//                     ['Cookie', 'secondary'],
//                     ['请求数据', 'secondary'],
//                     ['内容类型', 'secondary'],
//                     ['发送请求', 'primary'],
//                     ['查看响应', 'success']].map((item, index) => (
//                         <Col xxl={2} xs={6} sm={4} md={3} className='mb-3' key={[item, index]}>
//                             <Button
//                                 className='w-100 text-nowrap'
//                                 variant={item[1]}
//                                 onClick={() => {
//                                     alert(item[0])
//                                 }}
//                             >{item[0]}</Button>
//                         </Col>
//                     ))
//                 }
//             </Row></>
//     );
//     return (
//         <Container className='py-4'>
//             {MyContainer}
//         </Container>
//     );
// }

class MyClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: new Date() }
    }
    render() {
        return (
            <Card className='d-inline-block'>
                <Card.Header>现在时间</Card.Header>
                <Card.Body>{this.state.time.toLocaleString()}</Card.Body>
            </Card>
        )
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 100)
    }
}

class App extends React.Component {
    render() {
        return (<></>)
    }
}

export default App;
