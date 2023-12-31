import PropTypes from "prop-types";
import styled from "styled-components";

const UserOutputStyled = styled.div`
  padding: 1em;
  color: pink;
`;

function UserOutput({ name, age }) {
  return (
    <>
      <UserOutputStyled>
        <p>User: {name}</p>
        <p>Age: {age}</p>
      </UserOutputStyled>
    </>
  );
}

UserOutput.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

export default UserOutput;
