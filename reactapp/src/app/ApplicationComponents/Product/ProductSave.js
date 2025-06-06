import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../State/Product/ProductAction";

let ProductSave = (props) => {

    let name = useRef(null)
    let price = useRef(null)
    let desc = useRef(null)
    let rating = useRef(null)
    let category = useRef(null)

    let product = useSelector((state) => state.productReducer.Product) //product reducer
    let dispatchProduct = useDispatch();

    //useEffect - reads all the changes that affect the state of the component and then does the job of re-render
    //if we pass the second parameter to initialize the state it will work as - componentDidMount
    //if we dont pass the second parameter to initialize the state it will work as - shouldComponentUpdate
    //if we return a child function then it will work as - componentWillUnMount
    useEffect(() => {
        //initializing the values we read from reducer to our product state
        name.current.value = product.name
        price.current.value = product.price
        desc.current.value = product.desc
        rating.current.value = product.rating
        category.current.value = product.category

        //componentWillUnmount
        // return ()=>{
        //     console.log("This section works as component will unmount to clear all subscriptions")
        // }
    }, [])

    let saveProductClick = (evt) => {
        //creating product data model to be saved in db using product api
        let productToSave = {
            name: name.current.value,
            price: price.current.value,
            desc: desc.current.value,
            rating: rating.current.value,
            category: category.current.value
        }

        alert("We are going to save this product!!! " + JSON.stringify(productToSave))

        dispatchProduct(saveProduct(productToSave))
        evt.preventDefault();
    }

    return (
        <>
            <h1 className="col-md-12">Save to product</h1>

            <form className={"form componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6 name" ref={name} maxLength={25}
                            placeholder="Product Name" />
                    </div>
                    <div className="col-md-12">
                        <b>Price</b>
                        <input type="number" className="form-control col-md-6" ref={price}
                            placeholder="Product Price" />
                    </div>

                    <div className="col-md-12">
                        <b>Description</b>
                        <input type="text" className="form-control col-md-6" ref={desc}
                            placeholder="Please Describe the product" />
                    </div>

                    <div className="col-md-12">
                        <b>Ratings</b>
                        <input type="text" className="form-control col-md-6" ref={rating}
                            placeholder="Ratings" />
                    </div>

                    <div className="col-md-12">
                        <b>Category</b>
                        <input type="text" className="form-control col-md-6" ref={category}
                            placeholder="Category" />
                    </div>

                    <input type="button" className={"form-control btn btn-primary col-md-3"}
                        value={"Save Product"}
                        onClick={saveProductClick} />
                </div>
            </form>
            <hr />
        </>
    )
}
export default ProductSave;