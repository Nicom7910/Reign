import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

const StyledModal = styled.div`
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;

const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

const HeaderText = styled.div`
  align-self: center;
`;

const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

interface ModalProps {
  setOpenModal: (open: boolean) => void;
  dataModal: string;
}

const Modal = ({ setOpenModal, dataModal }: ModalProps) => {
  return (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{dataModal}</HeaderText>
            <CloseButton onClick={() => setOpenModal(false)}>X</CloseButton>
          </Header>
        </StyledModal>
      </Wrapper>
    </>
  );
};

export default Modal;
