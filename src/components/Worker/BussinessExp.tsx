import styled from "styled-components";
import { Button, Form } from "antd";
import FormItem from "antd/es/form/FormItem";

const Wrapper = styled.div`
`;

const BussinessExp = () =>{

  return (
    <Wrapper>

      <Form>
        <FormItem>
          <Button>新規情報追加</Button>
          <Button>該当情報削除</Button>
        </FormItem>
      </Form>

    </Wrapper>
  );

}