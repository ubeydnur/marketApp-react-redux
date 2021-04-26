import React from 'react'
import TextInput from '../toolbox/TextInput'
import { Button, Form, FormGroup } from 'reactstrap';
import SelectInput from '../toolbox/SelectInput';

const ProductDetail = ({ categories, product, onSave, onChange,errors }) => {
    return (
        <Form className="mt-5" onSubmit={onSave}>
            <FormGroup>
                <h3 className="text-info">{product.id ? 'UPDATE' : 'ADD TO PRODUCT'}</h3>
                <TextInput name="productName"
                    label="Product Name"
                    value={product.productName}
                    onChange={onChange}
                    error={errors.productName} />

                <SelectInput
                    name='categoryId'
                    label='Category'
                    value={product.categoryId || ''}
                    defaultOption='Select'
                    options={categories.map(category => ({
                        value: category.id,
                        text: category.categoryName
                    }))}
                    onChange={onChange}
                    error={errors.categoryId} />

                <TextInput name="unitPrice"
                    label="Unit Price"
                    value={product.unitPrice}
                    onChange={onChange}
                    error={errors.unitPrice} />

                <TextInput name="quantityPerUnit"
                    label="Quantity Per Unit"
                    value={product.quantityPerUnit}
                    onChange={onChange}
                    error={errors.quantityPerUnit} />

                <TextInput name="unitsInStock"
                    label="Units In Stock"
                    value={product.unitsInStock}
                    onChange={onChange}
                    error={errors.unitsInStock} />
            </FormGroup>
            <Button type="submit" color="success">Save</Button>
        </Form>
    )
}
export default ProductDetail