import { FormEvent } from "react";

interface FormProps {
  type: string;
  handelSubmit: (event: FormEvent) => void;
}
const Form = ({type, handelSubmit}:FormProps) => {
  return (
    <form
    onSubmit={handelSubmit}>
      <div>
        <h2>{`${type}`} Product</h2>
      </div>
      <label>Name</label>
      <input type="text" />
      <button type="submit">{`${type}`} Product</button>
    </form>
  );
}

export default Form;