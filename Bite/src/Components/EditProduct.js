import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams, useHistory } from 'react-router-dom';
import { db } from '../Firebase/firebase';

function EditProduct() {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'productdata2', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log('No such document!');
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleSave = async () => {
    const docRef = doc(db, 'productdata2', id);
    await updateDoc(docRef, product);
    history.push('/shop'); // Redirect to the shop page after saving
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  if (loading) {
    return <div>Loading product details...</div>;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      {product && (
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
            />
          </div>
          {/* Add more fields as needed */}
          <button type="button" onClick={handleSave}>
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
}

export default EditProduct;
