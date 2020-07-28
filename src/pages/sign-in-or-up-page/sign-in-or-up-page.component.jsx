import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signin-or-up-page.styles.scss';

const SignInOrUp = () => (
   <div className='sign-in-and-sign-up'>
     <SignIn/>
     <SignUp/>
   </div>
);

export default SignInOrUp;