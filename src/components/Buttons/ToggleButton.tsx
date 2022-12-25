import React, { FC, useState } from "react";
import FontAwesomeWrap from "../Icons/FontAwesomeWrap";
import { Button, BorderProps } from '@chakra-ui/react';
import { faBars, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";


const ToggleButton: FC<{
    iconRef: IconDefinition,
    border: string,
    borderColor: string,
    size: string,
    iconSize: SizeProp
}> = (
    {
        iconRef,
        border,
        borderColor,
        size,
        iconSize }) => {

        const [active, SetActive] = useState(false);

        const executeOnclick = () => {
            SetActive(!active);
        }

        return (
            <Button onClick={executeOnclick} size={size} border={active ? border : '0px' } variant='outline' borderColor={borderColor}>
                <FontAwesomeWrap size={iconSize} iconDef={faBars} />
            </Button>
        )
    }

export default ToggleButton;