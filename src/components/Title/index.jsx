import PropTypes from 'prop-types';

import { Title } from './styles';

function MainTitle({ children }) {
  return <Title>{children}</Title>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTitle;
