import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 22%;
  min-width: 200px;
  min-height: 200px;
  border: 2px solid #999;
  padding: 30px 10px;
  position: relative;
  margin: 30px 10px;

  display: flex;
  flex-direction: column;
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  left: 15px;
  background: #333;
  border: 2px solid #999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.text`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const IconsSocial = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
