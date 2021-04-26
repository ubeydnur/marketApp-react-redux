import React, { Component } from 'react'
import CategoryList from '../categories/CategoryList'
import ProductList from '../products/ProductList'
import { Row, Col } from 'reactstrap'

export default class Dashboard extends Component {
    render() {
        return (
            <Row>
                <Col md={3}>
                    <CategoryList/>
                </Col>
                <Col md={9}>
                    <ProductList />
                </Col>
            </Row>
        )
    }
}
