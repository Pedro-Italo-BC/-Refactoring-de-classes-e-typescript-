import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface FoodObject {
  id: number,
  name: string,
  description: string,
  price: string,
  available: boolean,
  image: string
}

interface FormData{
  name: string,
  image: string,
  price: string,
  description: string
}

interface ModalEditFood{
  isOpen: boolean,
  setIsOpen: () => void,
  editingFood: FoodObject ,
  handleUpdateFood: (food:FormData) => Promise<void>
}

function ModalEditFood ({editingFood,handleUpdateFood,isOpen,setIsOpen}:ModalEditFood){

  async function handleSubmit(data:FormData) {
    handleUpdateFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form  onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export default ModalEditFood;
