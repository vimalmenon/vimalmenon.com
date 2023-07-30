import styled from 'styled-components';

export const MainStyled = styled('div')(() => ({
  display: 'grid',
  gridTemplateRows: '25px 1fr 25px',
  minHeight: '100vh',
  gap: "16px"
}));

export const BodyContainer = styled('main')(() => ({
  display: 'grid',
  margin: '0 16px',
}));
