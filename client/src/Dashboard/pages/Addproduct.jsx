import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";

const Addproduct = () => {

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form
          onSubmit=''
          className="d-flex gap-3 flex-column"
        >   <input
        type="text"
        className='form-control '
        id='category'
        placeholder="Enter Category"
        name='category'
      />
          <div className="error">
          </div>
          <div className="">
            <ReactQuill
              theme="snow"
              name="description"
              value=''
            />
          </div>
          <div className="error">
          </div>
          <input
        type="text"
        className='form-control'
        id='products'
        placeholder="Enter products"
        name='products'
      />
          <div className="error">
          </div>
          <select
            name="brand"
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Select Brand</option>
            
          </select>
          <div className="error">
          </div>
          <select
            name="category"
            onChange=""
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Select Category</option>
          
          </select>
          <div className="error">
          </div>
          <select
            name="tags"
            onChange=''
           
            value=''
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="special">Special</option>
          </select>
          <div className="error">
          </div>

         
          <div className="error">
          </div>
          <input
        type="text"
        className='form-control '
        id='category'
        placeholder="Enter Category"
        name='category'
      />
          <div className="error">
          </div>
          <div className="bg-white border-1 p-5 text-center">
            <Dropzone
              onDrop=''
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
