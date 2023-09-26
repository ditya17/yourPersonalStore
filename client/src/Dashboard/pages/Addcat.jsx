import { React } from "react";

const Addcat = () => {
  return (
    <div>
      <h3 className="mb-4  title">
        Category
      </h3>
      <div>
        <form >
        <input
        type="text"
        className='form-control '
        id='category'
        placeholder="Enter Category"
        name='category'
      />
          <div className="error">
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;
