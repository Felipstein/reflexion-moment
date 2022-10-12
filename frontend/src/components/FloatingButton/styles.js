import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;

  #fbtn-root {
    width: auto;
    height: auto;
    text-decoration: none;

    .fbtn-inner {
      position: relative;
      background-color: rgba(255, 255, 255, 0.5);
      padding: 1.4rem;


      display: flex;
      align-items: center;
      border-radius: 100px;

      color: #111;
      overflow: hidden;

      #fbtn-icon {
        width: 3.8rem;
        height: 3.8rem;
      }

      #fbtn-content {
        position: absolute;
        left: 50px;

        min-width: 180px;

        font-weight: 500;
        font-size: 2.4rem;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.9);
      }
    }
  }

`;
