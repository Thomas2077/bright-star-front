import styled from "styled-components";
import { Button, Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import { searchWorkerApi } from "../../request/api";


const Wrapper = styled.div`
  width: calc(50% - 8px)
`;

const SkillExp = () =>{

  return (
    <Wrapper>
      <h2>技術経験</h2><p>		◎：実務経験１年以上 ／ ○：実務経験有り ／ △：知識有り</p>

      <Form>
        <FormItem>
          <Button onClick={()=>{
            searchWorkerApi(1).then((re)=> console.log(re))
          }}>searchWorkerApi</Button>
        </FormItem>
      </Form>

    </Wrapper>
  )

}
export default SkillExp;