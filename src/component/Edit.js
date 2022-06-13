import React from "react";

function Edit() {
  return (
    <div>
      {/* s */}

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit button
      </button>

      {/* <!-- Modal --> */}

      <div
        className="modal fade  modal-xl"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Product
              </h5>
              {console.log("EDIT")}

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              Picture
              <div className="input-group mb-3">
                {/* <label className="input-group-text" for="inputGroupFile01">Upload</label> */}
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                />
              </div>
              {/* Product name */}
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Product name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Detail:
                </label>
                <textarea className="form-control" id="message-text"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Price:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                />
              </div>
              <label>Quantity</label>
              <div class="input-group mb-2">
                <button type="button" class="input-group-text">
                  -
                </button>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <button type="button" class="input-group-text">
                  +
                </button>
              </div>
              <label htmlFor="recipient-name" className="col-form-label">
                Total Price:
              </label>
              <input type="text" className="form-control" id="recipient-name" />
              <label htmlFor="recipient-name" className="col-form-label">
                Date:
              </label>
              <input type="date" className="form-control" id="recipient-name" />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-success">
                Update
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* e */}
    </div>
  );
}

export default Edit;
