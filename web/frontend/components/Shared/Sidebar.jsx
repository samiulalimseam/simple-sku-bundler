import { Flex } from '@chakra-ui/react';
import React from 'react';

import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';


const menuItem = [
    { name: 'Home', link: '/' },
    { name: 'Bundles', link: '/bundles' },
    { name: 'Orders', link: '/orders' },
]
const NavItem = ({ children }) => {
    return (
        <div>


            <Link w={'100%'} to={children.link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <Flex
                    w={'100%'}
                    bg={'gray.200'}
                    align="center"
                    p="4"
                    mx="4"
                    my='1'
                    borderRadius="sm"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: 'cyan.400',
                        color: 'white',
                    }}
                >

                    {children.name}
                </Flex>
            </Link>
        </div>
    );
};

const Sidebar = () => {
    return (
        <Flex position={'fixed'} w={'20%'} flexDirection={'column'}  >

            {
                menuItem?.map(item => {
                    return <NavItem  >{item}</NavItem>
                })
            }
        </Flex>
    );
};

export default Sidebar;