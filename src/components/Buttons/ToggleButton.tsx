import React, { FC, useEffect, useState } from "react";
import FontAwesomeWrap from "../Icons/FontAwesomeWrap";
import { Button, BorderProps } from '@chakra-ui/react';
import { faBars, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import useAppDispatch from "../../redux/hooks/useAppDispatch";
import useAppSelector from "../../redux/hooks/useAppSelector";
import { ActionCreatorWithoutPayload, PayloadAction } from "@reduxjs/toolkit";
import { toggleSidebar } from "../../redux/reducers/appSlice";
import { RootState } from "../../redux/types";

const ToggleButton: FC<{
    iconRef: IconDefinition,
    border: string,
    borderColor: string,
    size: string,
    iconSize: SizeProp,
    dispatcher?: ActionCreatorWithoutPayload | void
}> = (
    {
        iconRef,
        border,
        borderColor,
        size,
        iconSize,
        dispatcher }) => {

        const [active, SetActive] = useState(false);

        const dispatch = useAppDispatch();
        const initActive = useAppSelector((state : RootState) => state.AppManager.sideBarActive);
        
        
        useEffect(() => {
            SetActive(initActive)
        }, [])
        

        const executeOnclick = () => {
            SetActive(!active);
           
            dispatch(toggleSidebar());
        }

        return (
            <Button onClick={executeOnclick} size={size} border={active ? border : '0px' } variant='outline' borderColor={borderColor}>
                <FontAwesomeWrap size={iconSize} iconDef={faBars} />
            </Button>
        )
    }

export default ToggleButton;