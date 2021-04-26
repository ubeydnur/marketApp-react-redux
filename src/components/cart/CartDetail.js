import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import { Table, Button } from 'reactstrap'
import alertify from 'alertifyjs'

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + ' Deleted')
    }
    render() {
        return (
            <Table hover className="mt-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity Per Unit</th>
                        <th>Unit Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.cart.map((cartItem) => (
                        <tr key={cartItem.id}>
                            <th scope="row">{cartItem.product.id}</th>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.quantityPerUnit}</td>
                            <td>{cartItem.product.unitPrice}$</td>
                            <td>
                                <Button color="danger" outline onClick={() => this.removeFromCart(cartItem.product)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)
