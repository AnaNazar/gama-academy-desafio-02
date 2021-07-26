import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';

import { Main, ProductItem } from './styles';

import api from '../../services/api';

interface IProduct {
  id: number,
  name: string,
  price: number,
  stock: number,
  image_url: string,
  description: string,
}

const Product: React.FC = () => {
  const [ products, setProducts ] = useState<IProduct[]>(() => {
    const storagedProducts = localStorage.getItem('@TheDevShop:products');
    
    return storagedProducts ? JSON.parse(storagedProducts) : [];
  });

  useEffect(() => {
    api.get('/products').then(
      response => {
        setProducts(response.data)
      }
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('@TheDevShop:products', JSON.stringify(products));
  }, [products]);

  return(
    <>
      <Header />
      <PageTitle>Catálogo de Produtos</PageTitle>
      <Main>
        <div className="container">
          <div className="actions">
            <button type="button" className="primary">Criar novo produto</button>
          </div>
          <div className="produtos">
            {products.map(product => (
              <ProductItem key={product.id}>
                <div className="image">
                  <img src={product.image_url} alt={product.name} />
                </div>
                <div className="content">
                  <h3>{product.name}</h3>
                  <div className="resumo">
                    <div className="id">
                      <strong>Identificador:</strong>
                      <span>{product.id}</span>
                    </div>
                    <div className="price">
                      <strong>Preço:</strong>
                      <span>R$ {product.price}</span>
                    </div>
                    <div className="stock">
                      <strong>Estoque:</strong>
                      <span>{product.stock} unidade(s)</span>
                    </div>
                  </div>
                  <p>{product.description}</p>
                  <div className="actions">
                    <button type="button" className="delete">Apagar</button>
                  </div>
                </div>
              </ProductItem>
            ))}
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Product;
