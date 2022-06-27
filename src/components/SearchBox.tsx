import InputBox from "./InputBox";
import Button from "./Button";

const SearchBox = () => {
  return (
    <div className="SearchBox">
      <InputBox />
      <Button value="検索" />
    </div>
  );
};

export default SearchBox;
