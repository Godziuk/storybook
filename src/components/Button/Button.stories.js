import React from 'react';
import Button from './Button';
import Center from '../Center/Center'

//w stories lewy panel
export default{
    title: 'Form/Control/Button',
    component: Button,
    args: {
        children: 'Button' //działa wszystkich children i nadaje text na button ten sam czyli 'Button'
    },
    //decorators: [story => <Center>{story()}</Center>], //dekorator dla Buttona

}
//eksport różnych story dla buttona
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args } />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    //children: 'Long Primary Ags'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    //children: 'Secondary Args'
}