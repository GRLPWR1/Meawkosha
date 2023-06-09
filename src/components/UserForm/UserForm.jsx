import React from "react";
// import { useState } from "react";

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
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };

function UserForm(props) {
  return (
    <div className="wrapper">
      <h1>Анкета для опекуна</h1>
      <Form
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="ФИО">
          <Input placeholder="Ваши фамилия и имя" />
        </Form.Item>
        <Form.Item label="Возраст">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="Ваш email" />
        </Form.Item>
        <Form.Item label="Телефон">
          <Input placeholder="Ваш номер телефона" />
        </Form.Item>
        <Form.Item label="Были ли у Вас раньше домашние животные?">
          <br />
          <Radio.Group>
            <Radio value="yes">Да</Radio>
            <Radio value="no">Нет</Radio>
          </Radio.Group>
        </Form.Item>
        <p>Готов ли Ваш дом к приёму питомца?</p>
        <Form.Item label="Чеклист:" valuePropName="checked">
          <Checkbox>На окна установлены сетки-"антикошки"</Checkbox>
          <Checkbox>Есть переноска для транспортировки</Checkbox>
          <Checkbox>Закуплен корм и миски</Checkbox>
          <Checkbox>Установлены когтеточки</Checkbox>
          <Checkbox>Оборудован лоток с наполнителем</Checkbox>
          <Checkbox>Обустроено спальное место</Checkbox>
        </Form.Item>
        <Form.Item label="Корм">
          <Select>
            <Select.Option value="dry">Сухой</Select.Option>
            <Select.Option value="moist">Консервы/паучи</Select.Option>
            <Select.Option value="natural">Натуральный</Select.Option>
            <Select.Option value="mix">Смешаный</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Button">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UserForm;
