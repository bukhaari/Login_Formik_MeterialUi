import Test from "./components/login";
const initialValues:any = {
  id: "",
  label: "",
  renderer: "",
  elements: [
    {
      title: "",
      save: {
        type: "",
        renderer: "",
        name: "",
        label: "",
        htmlClass: "",
        buttonType: "",
        // program: [],
      },
    },
  ],
};

function App() {
  return (
    <>
      <Test/>
    </>
  );
}

export default App;
