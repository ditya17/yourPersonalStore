import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";


const Addproduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = JSON.parse(localStorage.getItem('user'));
    setUserData(userDataFromStorage);
  }, []);
  const [formData, setFormData] = useState({
    category: "",
    image: "",
    year: "", 
    types: "",
    subject: "",
    products: "",
    brand: "",
    price: "",
    description: "",
  });

  const handleImageDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target.result;
        setSelectedImage(dataURL);
      };

      reader.readAsDataURL(file);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    setShowAdditionalFields(selectedValue === "Academic");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const productData = {
      name: userData?.name || "User Name",
      email: userData?.email || "user@gmail.com",
        category: selectedCategory,
      image: selectedImage,
      year: formData.year,
      types: formData.types,
      subject: formData.subject,
      products: formData.products,
      brand: formData.brand,
      price: formData.price,
      description: formData.description,    
    };
  
    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product added successfully:", data);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };
  

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      {/* <h5 className="mb-0">{userData?.name || "User Name"}</h5> 
          <p className="mb-0">{userData?.email || "user@gmail.com"}</p>  */}
      <div>
        <form onSubmit={handleSubmit} className="d-flex gap-3 flex-column">
        <select
                name="category"
                onChange={(handleCategoryChange) }
                value={selectedCategory}
                className="form-control py-3 mb-3"
                id="category"
              >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Academic">Academic</option>
            <option value="Accessories">Accessories</option>
            <option value="Gadgets">Gadgets</option>
          </select>

          {showAdditionalFields && (
            <>
              <select
                name="year"
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                value={formData.year}
                className="form-control py-3 mb-3"
                id="year"
              >
                <option value="" disabled>
                  Select Year
                </option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
              </select>
              <select
                name="types"
                onChange={(e) => setFormData({ ...formData, types: e.target.value })}
                value={formData.types}
                className="form-control py-3 mb-3"
                id="types"
              >
                <option value="" disabled>
                  Select Types
                </option>
                <option value="Notes">Notes</option>
                <option value="Books">Books</option>
                <option value="Quantum">Quantum</option>
              </select>
              <div className="error"></div>
              <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject Name"
            name="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
            </>
          )}

          {selectedImage ? (
            <div className="selected-image-container">
              <img
                src={selectedImage}
                alt="Selected"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <button
                className="remove-image-button"
                onClick={removeSelectedImage}
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="bg-white border-1 p-5 text-center">
              <Dropzone onDrop={handleImageDrop}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p className="cursor-pointer">
                        Drag 'n' drop Image here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
          )}

          {!showAdditionalFields && (
            <>
              <div className="error"></div>
              <input
            type="text"
            className="form-control"
            id="products"
            placeholder="Products"
            name="products"
            value={formData.products}
            onChange={(e) => setFormData({ ...formData, products: e.target.value })}
          />
              <div className="error"></div>
<input
            type="text"
            className="form-control"
            id="brand"
            placeholder="brand"
            name="brand"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
          />
            </>
          )}

<div className="error"></div>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
          <div className="error"></div>
          <div className="">
            <ReactQuill
              theme="snow"
              name="description"
              value={formData.description}
              onChange={(value) => setFormData({ ...formData, description: value })}
            />
            Description
          </div>
          <div className="error"></div>
          <div className="showimages d-flex flex-wrap gap-3"></div>
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