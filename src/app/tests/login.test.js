// src/tests/Login.test.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Login from './../components/Login';

// Mock the useEffect hook

jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

test('displays welcome message after successful login', () => {

  const { getByText } = render(<Login />);

  const welcomeMessage = getByText('Welcome, User!');

  expect(welcomeMessage).toBeInTheDocument();

});