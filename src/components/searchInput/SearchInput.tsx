import React, { FC, useRef } from "react";
import { Form } from "react-bootstrap";

interface SearchInputProps {
  searchKeyword: (arg: string) => void;
  term: string;
}

const SearchInput: FC<SearchInputProps> = ({ searchKeyword, term }) => {
  const inputEl: any = useRef<string | null>(null);

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value);
  };

  console.log(typeof term);
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type="text"
        placeholder="Search..."
        value={term}
        onChange={getSearchTerm}
        ref={inputEl}
      />
    </Form.Group>
  );
};
export default SearchInput;
