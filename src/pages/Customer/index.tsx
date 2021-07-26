import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';

import { Main, CustomerItem } from './styles';

import api from '../../services/api';

interface ICustomer {
  cpf: number,
  name: string,
  email: string,
  phone_number: string,
  address: {
      street: string,
      number: number,
      district: string,
      city: string,
      uf: string,
      cep: number
  }
}

const Customer: React.FC = () => {
  const [ customers, setCustomers ] = useState<ICustomer[]>(() => {
    const storagedCustomers = localStorage.getItem('@TheDevShop:customers');
    
    return storagedCustomers ? JSON.parse(storagedCustomers) : [];
  });

  useEffect(() => {
    api.get('/customers').then(
      response => {
        setCustomers(response.data)
      }
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('@TheDevShop:customers', JSON.stringify(customers));
  }, [customers]);

  return(
    <>
      <Header />
      <PageTitle>Catálogo de Clientes</PageTitle>
      <Main>
        <div className="container">
          <div className="clientes">
            {customers.map(customer => (
              <CustomerItem key={customer.cpf}>
                <div className="content">
                  <h3>{customer.name}</h3>
                  <div className="resumo">
                    <div className="cpf">
                      <strong>CPF:</strong>
                      <span>{customer.cpf}</span>
                    </div>
                    <div className="email">
                      <strong>Email:</strong>
                      <span>{customer.email}</span>
                    </div>
                    <div className="phone">
                      <strong>Telefone:</strong>
                      <span>{customer.phone_number}</span>
                    </div>
                  </div>
                  <div className="resumo address">
                    <div className="street">
                      <strong>Endereço:</strong>
                      <span>{customer.address.street}</span>
                    </div>
                    <div className="number">
                      <strong>Número:</strong>
                      <span>{customer.address.number}</span>
                    </div>
                    <div className="district">
                      <strong>Bairro:</strong>
                      <span>{customer.address.district}</span>
                    </div>
                    <div className="city">
                      <strong>Cidade:</strong>
                      <span>{customer.address.city}</span>
                    </div>
                    <div className="uf">
                      <strong>UF:</strong>
                      <span>{customer.address.uf}</span>
                    </div>
                    <div className="cep">
                      <strong>CEP:</strong>
                      <span>{customer.address.cep}</span>
                    </div>
                  </div>
                  <div className="actions">
                    <button type="button" className="delete">Apagar</button>
                  </div>
                </div>
              </CustomerItem>
            ))}
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Customer;
