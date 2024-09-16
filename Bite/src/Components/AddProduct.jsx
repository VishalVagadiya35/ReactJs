import React, { useState } from 'react';
import { db } from '../Firebase/firebase'; // Adjust the import based on your file structure
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImageURL, setProductImageURL] = useState('');
    const [productImageFile, setProductImageFile] = useState(null);
  
    const handleImageFileChange = (e) => {
      setProductImageFile(e.target.files[0]);
      setProductImageURL(''); // Clear the URL if a file is selected
    };
  
    const handleImageURLChange = (e) => {
      setProductImageURL(e.target.value);
      setProductImageFile(null); // Clear the file if a URL is entered
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let imageUrl;
  
        if (productImageFile) {
          // If an image file is uploaded
          const storageRef = ref(storage, `images/${productImageFile.name}`);
          await uploadBytes(storageRef, productImageFile);
          imageUrl = await getDownloadURL(storageRef);
        } else if (productImageURL) {
          // If an image URL is provided
          imageUrl = productImageURL;
        } else {
          throw new Error('No image provided');
        }
  
        // Add product data to Firestore
        const docRef = await addDoc(collection(db, 'productdata2'), {
          name: productName,
          price: productPrice,
          description: productDescription,
          category: productCategory,
          image: imageUrl, // Store the image URL in Firestore
        });
        console.log('Document written with ID: ', docRef.id);
        // Reset form fields
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setProductCategory('');
        setProductImageFile(null);
        setProductImageURL('');
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };
  
    return (
      <div>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Product Name:</label>
            <input 
              type="text" 
              value={productName} 
              onChange={(e) => setProductName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Product Price:</label>
            <input 
              type="number" 
              value={productPrice} 
              onChange={(e) => setProductPrice(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Product Description:</label>
            <textarea 
              value={productDescription} 
              onChange={(e) => setProductDescription(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Product Category:</label>
            <select 
              value={productCategory} 
              onChange={(e) => setProductCategory(e.target.value)} 
              required
            >
              <option value="">Select a category</option>
              <option value="Best Sellers">Best Sellers</option>
              <option value="Sets">Sets</option>
              <option value="Oral Care">Oral Care</option>
              <option value="Body Care">Body Care</option>
              <option value="Subscribe & Save">Subscribe & Save</option>
            </select>
          </div>
          <div>
            <label>Product Image (Upload File):</label>
            <input 
              type="file" 
              onChange={handleImageFileChange} 
              accept="image/*" 
            />
          </div>
          <div>
            <label>Product Image (Image URL):</label>
            <input 
              type="url" 
              value={productImageURL} 
              onChange={handleImageURLChange} 
              placeholder="Paste image URL here" 
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  };
  
  export default AddProduct;