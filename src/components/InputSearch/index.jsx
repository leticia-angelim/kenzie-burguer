import { useState } from "react";
import { Input } from "./styles";

const InputSearch = ({ showProducts }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <Input
        type="text"
        placeholder="Digitar Pesquisa"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={() => {
          showProducts(value);
        }}
      />
    </>
  );
};

export default InputSearch;
