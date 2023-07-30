import styled from 'styled-components';

export const MainStyled = styled('div')(() => ({
  display: 'grid',
  gridTemplateRows: '64px 1fr 25px',
  minHeight: '100vh',
  gap: '8px',
}));

export const BodyContainer = styled('main')(() => ({
  display: 'grid',
  margin: '0 24px',
}));
