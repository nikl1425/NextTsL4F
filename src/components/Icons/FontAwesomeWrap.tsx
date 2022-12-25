import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { chakra } from '@chakra-ui/react';
import React, {FC} from 'react';

const FontAwesomeWrap: FC<{iconDef: IconDefinition}> = ({iconDef}) => {
    const Icon = chakra(FontAwesomeIcon);
    return (
        <Icon icon={iconDef} />
    ) 
}
export default FontAwesomeWrap;