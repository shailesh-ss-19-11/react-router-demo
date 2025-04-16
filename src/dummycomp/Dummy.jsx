import ExtraComponent from "./ExtraComponent";
import InputComponent from "./InputComponent";

const Dummy = () => {
  return (
    <div>
      <h1>Dummy Component</h1>
      <InputComponent>
        <ExtraComponent />
      </InputComponent>
    </div>
  );
};

export default Dummy;
