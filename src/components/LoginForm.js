import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        
        <CardSection>
          <Input
            secure
            label="Password"
            placeholder="password"
          />
        </CardSection>
        
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = () => {};

export default connect(null, { emailChanged })(LoginForm);
