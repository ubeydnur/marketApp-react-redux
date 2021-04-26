import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from '../../redux/actions/productActions'
import { ListGroup, ListGroupItem } from 'reactstrap';

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }

    selectCategory(category) {
        this.props.actions.changeCategory(category)
        this.props.actions.getProducts(category.id)
    }
    render() {
        return (
            <div className="mt-5">
                <h3 className="text-center text-danger">Categories</h3>
                <ListGroup className="mt-3">
                    {this.props.categories.map(category => (
                        <ListGroupItem action tag="a" href="#"
                            active={category.id === this.props.currentCategory.id}
                            key={category.id}
                            onClick={() => this.selectCategory(category)}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)