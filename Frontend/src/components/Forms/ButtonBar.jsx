import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearBasicInfo } from '../../reducers/basicInfoReducer';
import { BsFillStopCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 0px 0px;
  gap: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap-reverse;
`;

//If onBack function is defined, render back button
const ButtonBar = ({onBack, children}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onInterrupt = () => {
    dispatch(clearBasicInfo());
    navigate('/');
  };


  return(
    <Container>
      <ButtonGroup>
        <Button color='red' type='button' onClick={onInterrupt}>
          <BsFillStopCircleFill size='32'/>
          Keskeytä
        </Button>
        {onBack &&
          <Button color='orange' type='button' onClick={onBack}>
            <BsFillArrowLeftCircleFill size='30'/>
            Takaisin
          </Button>
        }
      </ButtonGroup>
      {children}
    </Container>
  );
};

export default ButtonBar;