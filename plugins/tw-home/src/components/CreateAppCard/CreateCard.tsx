import React from 'react';
import { Actions } from './Actions';
import { Content } from './Content';

export const CreateCard = (props:{title:string; description:string; action:string; href:string}) => {
  return (
    <div>
        <Content title={props.title} description={props.description}/>
        <Actions action={props.action} href={props.href}/>
    </div>
  );
};
