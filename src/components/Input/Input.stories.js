import React from 'react';
import Input from './Input';

//w stories lewy panel
export default{
    title: 'Form/Input', //grupujemy Form
    component: Input
}
//eksport różnych story dla buttona
export const Small = () => <Input size='small' placeholder='Small size' />
export const Medium = () => <Input size='medium' placeholder='Medium size' />
export const Large = () => <Input size='large' placeholder='Large size' />

Small.storyName = 'Small Input' //zmienia nazwę ze small na small input po prawej stronie