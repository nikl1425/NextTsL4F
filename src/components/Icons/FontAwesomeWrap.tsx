import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { chakra } from '@chakra-ui/react';
import React, {FC} from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

const FontAwesomeWrap: FC<{iconDef: IconDefinition, size?: SizeProp | undefined}> = ({iconDef, size}) => {
    const Icon = chakra(FontAwesomeIcon);

    if(size) return <Icon size={size} icon={iconDef} />
    return (
        <Icon icon={iconDef} />
    ) 
}
export default FontAwesomeWrap;