import React, { useState } from "react";
import "./App.css";

// 3...Model start.....
import Modal from "react-modal/lib/components/Modal";
// 3...Model end...

// 2...Toast start...
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// 2...Toast start...

// 1...Icons start...
// import { FaReact } from "react-icons/fa";
// import { FaAccessibleIcon } from "react-icons/fa";
// import { MdAddShoppingCart } from "react-icons/md";
// import { IconContext } from "react-icons/lib";
// 1...Icons end...

// --------------------------------------------------------

// 2...Toast Start...
// const CustonToast = ({ closeToast }) => {
//   return (
//     <div>
//       somthing went wrong....
//       <button onClick={closeToast}>Close</button>
//     </div>
//   );
// };

// toast.configure();
// function App() {
//   const notify = () => {
//     toast("Basic notifications.....", { position: toast.POSITION.TOP_LEFT });
//     toast.success("Succes notifications.....", {
//       position: toast.POSITION.TOP_CENTER,
//       autoClose: 8000,
//     });
//     toast.warn("Warn notifications.....", {
//       position: toast.POSITION.TOP_RIGHT,
//       autoClose: false,
//     });
//     toast.info("Info notifications.....", {
//       position: toast.POSITION.BOTTOM_CENTER,
//     });
//     toast.error("Error notifications.....", {
//       position: toast.POSITION.BOTTOM_RIGHT,
//     });
//     toast.warning(<CustonToast />, {
//       position: toast.POSITION.BOTTOM_LEFT,
//     });
//   };
// return (
//   <div>
//     <button onClick={notify}>Notify!</button>
//   </div>
// );
// }
// export default App;
// 2...Toast End...

// -----------------------------------------------------------------------

// 1...Icons start...
// function App() {
//   return (
//     <IconContext.Provider value={{ color: "blue", size: "8rem" }}>
//       <div className="App">
//         <h1>Font Awesome Icons...</h1>
//         <FaReact color="red" />
//         <FaAccessibleIcon />
//         <FaAccessibleIcon color="green" />
//         <FaAccessibleIcon />
//         <MdAddShoppingCart color="yellow" />
//       </div>
//     </IconContext.Provider>
//   );
// }
// export default App;
// 1...Icons end...

// -----------------------------------------------------------------------------

// ...Modal Start....
Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}
export default App;
// ...Modal end....
