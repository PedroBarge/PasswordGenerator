/* eslint-disable no-undef */
import '@testing-library/jest-dom';

import Checkbox from "./Componets/Checkbox/Checkbox";
import Button from "./../Componets/Button/Button.jsx";
import ButtonGenerator from "./Componets/Button/ButtonGenrator";
import Range from "./Componets/Range/Range";

import { screen, render } from '@testing-library/react';


test('should render',()=>{
    render(<Range/>);
    render(<Checkbox/>);
    render(<Button/>);
    render(<ButtonGenerator/>);
    screen.debug();
});