import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.3s;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  overflow: initial;
  max-height: 90%;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  line-height: 1.5;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.6);
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    border: none;
    background: transparent;
  }
`;

export const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

export const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

export const AssentsButton = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 40px;
  min-width: 40px;
  min-height: auto;
  color: rgba(0, 0, 0, 0.5);
  border: none;
  background: transparent;
`;

export const AttachAssents = styled.div`
  display: flex;
  padding-right: 8px;
  align-items: center;

  ${AssentsButton} {
    width: 40px;
  }
`;

export const ShareComment = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  margin-right: auto;
  padding-left: 8px;
`;

export const PostButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  min-width: 60px;
  width: 75px;
  border: 1px solid transparent;
  border-radius: 20px;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(1,1,1,0.6)" : "white")};
  cursor: pointer;
  :hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
  }
`;

export const Editor = styled.div`
  padding: 12px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .inputvideo {
    width: 80%;
    ::placeholder {
      color: #0a66c2;
      font-size: 14px;
    }
    :active {
      border: none;
    }
  }
  textarea {
    width: 90%;
    border: none;
    overflow: auto;
    outline: none;
    resize: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    :active {
      border: none;
    }
    min-height: 100px;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const UploadImage = styled.div`
  text-align: center;
  overflow: hidden;
  img {
    width: 100%;
  }
  label {
    color: #0a66c2;
    font-size: 16px;
    font-weight: 600;
  }
`;
