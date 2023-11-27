// FormData.jsx
import React, { useContext, useEffect, useState } from 'react'
import './FormData.css'
import { useCheckLocalstorage } from '../Context/checkLocalstorage'

const FormData = () => {
    const {isLocalstorageUpdated,updateLocalstorage} = useCheckLocalstorage();
    const [products,setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
    const [inputObject,setInputObject] = useState({
        ProductId : '',
        ProductName : '',
        Price : '',
        Quantity : '',
        Description : '',
        selectColor : 'red'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (JSON.parse(localStorage.getItem('products')).length < 1 ) {
            setProducts([]);
            console.log('made empty')
        }else{
            console.log('not empty')
        }
        if (isLocalstorageUpdated.isdelete) {
            setProducts(JSON.parse(localStorage.getItem('products')) || [])
            console.log(products,'this')
            updateLocalstorage({islocal:false,isdelete:false})
        }
       
        let haveId = false;
        
        products.map(product => {
            if (product.id === inputObject.ProductId) {
                alert('this id has been used please use another id.')
                haveId = true;
            }
        })

        if (!haveId) {
            const newProduct = {
                id: inputObject.ProductId,
                name: inputObject.ProductName,
                price: inputObject.Price,
                quantity: inputObject.Quantity,
                description: inputObject.Description,
                selectColor: inputObject.selectColor,
              };
              setProducts([...products,newProduct])
              updateLocalstorage({...isLocalstorageUpdated,islocal:true});
              haveId= false
        }
        
        setInputObject({
            ProductId : '',
            ProductName : '',
            Price : '',
            Quantity : '',
            Description : '',
            selectColor : 'red'
        })
    }
    const handleinputObject = (e) => {
        const { id , value} = e.target;
        setInputObject(previnputObject => ({
            ...previnputObject,
            [id]: value
        }))
    }

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
        updateLocalstorage({...isLocalstorageUpdated,islocal:false})
    }, [products]);
    
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='name'>
            <label htmlFor="ProductName">Product Name :</label>
            <input id='ProductName' onChange={handleinputObject} value={inputObject.ProductName} type="text" placeholder='Enter product name'  />
        </div>
        <div>
            <label htmlFor="ProductId">Product Id :</label>
            <input id='ProductId' onChange={handleinputObject} value={inputObject.ProductId} type="text" placeholder='Enter product Id'  />
        </div>
        <div>
            <label htmlFor="Price">Price :</label>
            <input id='Price' onChange={handleinputObject} value={inputObject.Price} type="text" placeholder='Enter product price'  />
        </div>
        <div>
            <label htmlFor="Quantity">Quantity :</label>
            <input id='Quantity' onChange={handleinputObject} value={inputObject.Quantity} type="text" placeholder='Enter product Quantity'  />
        </div>
        <div>
            <label htmlFor="Description">Description :</label>
            <input id='Description' onChange={handleinputObject} value={inputObject.Description} type="text" placeholder='Enter product Description'  />
        </div>
        <div>
            <label htmlFor="color">Product Color :</label>
            <select id='selectColor' onChange={handleinputObject} value={inputObject.selectColor}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
        </div>
        <button type='submit'>Add Product</button>
    </form>
  )
}

export default FormData

