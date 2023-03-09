import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail, cleanDetail } from "../redux/actions";

export default function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { name, image, brand, description, price, rating, numReviews } = useSelector(state => state.productDetail);

    useEffect(() => {
        dispatch(getProductDetail(id))

        return () => {
            dispatch(cleanDetail())
        }

    }, [dispatch, id])

    return (
        <div className="container-detail">
            <h2>{name}</h2>
            <img
                src={`http://localhost:5000${image}`}
                className='image-detail'
                alt={"name"}
            />
            <div>
                <label>Brand:</label>
                <div >
                    <span>{brand}</span>
                </div>
            </div>
            <div>
                <label>Price:</label>
                <div >
                    <span>{`$ ${price}`}</span>
                </div>
            </div>

            <div>
                <label>Rating:</label>
                <div >
                    <span>{`✫ ${rating}`}</span>
                </div>
            </div>

            <div>
                <label>Reviews:</label>
                <div >
                    <span>{numReviews}</span>
                </div>
            </div>

            <div className="description">
                {description}
            </div>

        </div>
    )
}
