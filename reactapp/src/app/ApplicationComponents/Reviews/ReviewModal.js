import React, {useState, useRef} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveReview } from "../../State/Reviews/ReviewsAction";

let ReviewModal = ({userId, refModel, refObj})=>{
    const dispatch = useDispatch();
    const content = useRef();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    console.log(refObj)

    let submitReview = (evt) => {
        const reviewContent = content.current.value;
        //creating product data model to be saved in db using product api  
        setShowModal(false);
        dispatch(saveReview(userId, refModel, refObj, reviewContent));
        navigate("/reviews", { state: { refModel: refModel, refObj: refObj } });
        evt.preventDefault();
      }

    return (
    <>
      {!showModal && <button onClick={() => setShowModal(true)}>Leave a review</button>}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold">Leave a review!</h3>
            <input type="text" className="form-control" ref={content} maxLength={50}
                            placeholder="Enter review here" />
            <button className="mt-4" onClick={submitReview}>
              Submit review
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ReviewModal;