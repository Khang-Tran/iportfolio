import React, { Component } from 'react';

import { Segment, Container, Grid, Header, Button, Icon } from 'semantic-ui-react';

import { animateScroll as scroll } from 'react-scroll'
const Footer = () => (
    <Container fluid style={{ backgroundColor: '#ff7961' }}>
        <Grid textAlign='center'>
            <Grid.Row>
                <Header textAlign='center'>
                    <Segment basic>
                        <Icon size='big' onClick={() => scroll.scrollToTop()} link name='home' />

                    </Segment>

                    <Header.Subheader>
                        Lorem ipsum dolor sit amet
                    </Header.Subheader>
                </Header>

            </Grid.Row>
            <Grid.Row>
                <Button.Group size='large'>
                    <Button className='hvr-wobble-vertical' color='facebook'>
                        <Icon name='facebook' /> Facebook
                    </Button>
                    <Button className='hvr-wobble-vertical' color='google plus'>
                        <Icon name='google plus' /> Google Plus
                    </Button>
                    <Button className='hvr-wobble-vertical' color='linkedin'>
                        <Icon name='linkedin' /> LinkedIn
                    </Button>
                    <Button className='hvr-wobble-vertical' color='black'>
                        <Icon name='github' /> Github
                    </Button>
                </Button.Group>
            </Grid.Row>
        </Grid>
    </Container>
);

export default Footer;