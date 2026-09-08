import styled from 'styled-components';
import type { ReactNode } from 'react';

interface Background2Props {
  children?: ReactNode;
}

const Background2 = ({ children }: Background2Props) => {
  return (
    <StyledWrapper>
      <div className="background" />
      <div className="content">{children}</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  min-height: 100svh;
  overflow: hidden;

  .background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: radial-gradient(125% 125% at 50% 10%, #f1e5ff 40%, #4e2b85 100%);
    transition: background 300ms ease;
  }

  .dark & .background {
    background: radial-gradient(125% 125% at 50% 10%, #090311 40%, #251642 100%);
  }

  .content {
    position: relative;
    z-index: 1;
  }
`;

export default Background2;
