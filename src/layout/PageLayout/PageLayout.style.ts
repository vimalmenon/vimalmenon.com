import styled from 'styled-components';

export const MainStyled = styled('div')(() => ({
  display: 'grid',
  gridTemplateRows: '25px 1fr 25px',
  minHeight: '100vh',
}));

export const BodyContainer = styled('main')(() => ({
  display: 'grid',
}));
