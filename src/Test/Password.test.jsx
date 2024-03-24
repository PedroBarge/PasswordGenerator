/* eslint-disable no-undef */
import '@testing-library/jest-dom';

import Checkbox from "./Componets/Checkbox/Checkbox";
import Button from "./../Componets/Button/Button.jsx";
import ButtonGenerator from "./Componets/Button/ButtonGenrator";
import Range from "./Componets/Range/Range";

import { screen, render } from '@testing-library/react';
import { test } from 'vitest';


test('should render',()=>{
    render(<Range/>);
    render(<Checkbox/>);
    render(<Button/>);
    render(<ButtonGenerator/>);
    screen.debug();
});

test("it should update password when generate is clicked",()=>{
    render(<ButtonGenerator/>);
    const button = screen.getByText("Generate");
    button.click();
    expect(screen.getByText(/[a-zA-Z0-9]+/)).toBeInTheDocument();
});

test("it should update password length when slider is dragged and generate is clicked",()=>{
    render(<Range/>)
    const slider = screen.getByTestId("slider");
    slider.click();
    expect(screen.getByText(/[0-32]+/)).toBeInTheDocument();
});