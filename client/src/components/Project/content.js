import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

const Content = ({ content }) => (
    <Segment textAlign='left' basic size='large' style={{ fontWeight: '300', lineHeight: '130%' }}>
        {content}
    </Segment>
);

export default Content;

Content.propTypes = {
    content: PropTypes.string
};