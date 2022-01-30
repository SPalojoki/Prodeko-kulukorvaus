import React from 'react';
import styled from 'styled-components';
import { BsPaperclip } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setFile } from '../../reducers/selectedFileReducer';
// import uniquid from 'uniqid';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
  box-sizing: border-box;
  border: 2px solid gray;
  border-radius: 10px;
  padding: 15px 30px;
  box-shadow: 5px 10px;
  transition: 0.5s;
  width: 175px;
  &:hover {
    box-shadow: 8px 13px;
    transition: 0.5s;
    transform: translate(-3px, -3px);
    border-color: black;
    cursor: pointer;
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;


const FileInput = () => {
  const dispatch = useDispatch();
  const selectedFile = useSelector(state => state.selectedFile);

  
  const handleFileChange = (file) => {
    // const fileID = uniquid();
    // const fileExtension = file.name.split('.').pop();

    // Object.defineProperty(file, 'name', {
    //   writable: true,
    //   value: `${fileID}.${fileExtension}`
    // });

    dispatch(setFile(file));
  };


  return(
    <Container style={{ backgroundColor: selectedFile ? 'lightgreen' : null }}>
      <BsPaperclip size='20' />
      <label htmlFor="upload-receipt">{selectedFile ? 'Kuitti liitetty' : 'Liitä kuitti'}</label>
      <Input type="file" accept=".jpg,.jpeg,.png,.pdf" name="receipt" id="upload-receipt" onChange={event => handleFileChange(event.target.files[0])} />
    </Container>
  );
};

export default FileInput;