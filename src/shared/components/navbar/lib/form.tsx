import styled from "styled-components";
import { Formik, Field, Form } from "formik";

import { Column, VerticalBox } from "../../containers";
import { observer } from "mobx-react";

import { SharedStore } from "@shared";

interface IWrapper {
  scrollOffset: number;
}

interface IForm extends IWrapper {}

const FormWrapper = styled.div<IForm>`
  position: absolute;
  z-index: 2000;
  overflow: hidden;
  top: 64px;
  right: 0;
  opacity: 0;
  transition: opacity 0.35s linear;

  &:hover {
    visibility: visible;
    opacity: 1;
  }
`;

const FormInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  background: ${({ theme }) => theme.palette.secondary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  label {
    color: white;
    font-size: 0.75rem;
  }
`;

const Input = styled(Field)`
  width: 224px;
  height: 48px;
  transform: skew(-8deg);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  outlined: none;
  padding: 8px;
  color: white;
`;

const Button = styled.div`
  background: ${({ theme }) => theme.palette.pink};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skew(-8deg);
  color: white;
  padding: 8px 16px;
`;

export const LoginForm = observer(({ scrollOffset }: IForm) => {
  const { login } = SharedStore;
  return (
    <Formik
      initialValues={{
        password: "",
        login: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <FormWrapper className={"form"} scrollOffset={scrollOffset}>
          <FormInner>
            <Column height={"fit-content"} flex={0}>
              <label htmlFor="login">Логин:</label>
              <VerticalBox height={8} />
              <Input id="login" name="login" placeholder="Логин" />
            </Column>
            <VerticalBox height={8} />
            <Column height={"fit-content"} flex={0}>
              <label htmlFor="password">Пароль:</label>
              <VerticalBox height={8} />
              <Input
                id="password"
                name="password"
                placeholder="Пароль"
                type={"password"}
              />
            </Column>
            <VerticalBox height={16} />
            <Button onClick={() => login()}>Войти</Button>
          </FormInner>
        </FormWrapper>
      </Form>
    </Formik>
  );
});
