import React from "react";
import { useState } from "react";

import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";

const { TextArea } = Input;

function UserForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    checkbox: false,
    radio: "",
    textarea: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/form-data", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="wrapper">
      <h1>Анкета для опекуна</h1>
      <Form
        labelCol={{
          span: 10,
        }}
        labelWrap
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
        onSubmit={handleSubmit}
      >
        <Form.Item label="ФИО">
          <Input
            placeholder="Ваши фамилия и имя"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Возраст">
          <InputNumber
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            placeholder="Ваш email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Телефон">
          <Input
            placeholder="Ваш номер телефона"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Были ли у Вас раньше домашние животные?">
          <Radio.Group>
            <Radio
              type="radio"
              name="radio"
              value="yes"
              checked={formData.radio === "yes"}
              onChange={handleChange}
            >
              Да
            </Radio>
            <Radio
              type="radio"
              name="radio"
              value="no"
              checked={formData.radio === "no"}
              onChange={handleChange}
            >
              Нет
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Готов ли Ваш дом к приёму питомца?"
          valuePropName="checked"
        >
          <Checkbox
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          >
            На окна установлены сетки-"антикошки"
          </Checkbox>
          <Checkbox
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          >
            Есть переноска для транспортировки
          </Checkbox>
          <Checkbox
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          >
            Закуплен корм и миски
          </Checkbox>
          <Checkbox
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          >
            Установлены когтеточки
          </Checkbox>
          <Checkbox
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          >
            Оборудован лоток с наполнителем
          </Checkbox>
          <Checkbox
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          >
            Обустроено спальное место
          </Checkbox>
        </Form.Item>
        <Form.Item label="Как вы планируете кормить питомца?">
          <Select>
            <Select.Option value="dry" onChange={handleChange}>
              Сухой
            </Select.Option>
            <Select.Option value="moist" onChange={handleChange}>
              Консервы/паучи
            </Select.Option>
            <Select.Option value="natural" onChange={handleChange}>
              Натуральный
            </Select.Option>
            <Select.Option value="mix" onChange={handleChange}>
              Смешаный
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Здесь Вы можете написать любую дополнительную информацию, которую сочтёте нужной">
          <TextArea
            rows={4}
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Отправить">
          <Button type="primary" htmlType="submit">
            <img
              src="https://img.icons8.com/?size=1x&id=103459&format=png"
              alt="cat paw"
            />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UserForm;
