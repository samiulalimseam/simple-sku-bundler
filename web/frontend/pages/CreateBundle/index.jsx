import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, Select, Text } from '@chakra-ui/react';
import React from 'react';
import { Listbox, Combobox, Icon } from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';
import { useState, useCallback, useMemo } from 'react';
import { ComboBox } from '../../components/ComboBox';

const CreateBundle = () => {
    const [formData, setFormData] = useState({
        bundleName: '',
        title: '',
        description: '',
        originalPrice: '',
        discountedPrice: '',
        bundleStatus: '',
    });
    const options = [
        {value: 'rustic', label: 'Rustic'},
        {value: 'antique', label: 'Antique'},
        {value: 'vinyl', label: 'Vinyl'},
        {value: 'vintage', label: 'Vintage'},
        {value: 'refurbished', label: 'Refurbished'},
      ]
    return (
        <div>
            <Text my='3' fontWeight={'bold'} fontSize={"xl"}>
                Create new SKU bundle
            </Text> <br />
            <FormControl boxShadow='xs' p='6' rounded='md' bg='white'>
                <Flex my={2} gap={2}>
                    <Box width={'100%'}>

                        <FormLabel>Bundle Name</FormLabel>
                        <Input type='text' />
                        <FormHelperText>Bundle name will be visible on invoices.</FormHelperText>
                    </Box>

                    <Box width={'100%'}>

                        <FormLabel>Tittle</FormLabel>
                        <Input type='text' />
                        <FormHelperText>Title will be displayed in bundle widgets.</FormHelperText>
                    </Box>
                </Flex>
                <Flex gap={2}>
                    <Box width={'full'}>

                        <FormLabel>Description</FormLabel>
                        <Input type='text' />
                        <FormHelperText>Description will be displayed in bundle widgets under bundle title.</FormHelperText>
                    </Box>
                    <Box width={'full'}>

                        <FormLabel>Original Price</FormLabel>
                        <Input type='text' />
                        <FormHelperText>Original price of the bundle product will be displayed here</FormHelperText>
                    </Box>
                    <Box width={'full'}>

                        <FormLabel>Discounted Price</FormLabel>
                        <Input type='text' />
                        <FormHelperText>Discounted price of the bundle  will be displayed here</FormHelperText>
                    </Box>
                </Flex>
                <Box my={2} height={'auto'} gap={2} >
                <FormLabel>Search for SKU </FormLabel>
                <ComboBox  data={options}></ComboBox>
                </Box>

                <Box width={'50%'}>

                    <FormLabel>Bundle Status</FormLabel>
                    <Select placeholder='Select status'>
                        <option>Active</option>
                        <option>Inactive</option>
                    </Select>
                </Box>


                <Button
                    mt={4}
                    colorScheme='teal'
                    isLoading={false}
                    type='submit'
                >Submit</Button>
            </FormControl>
        </div>
    );
};

export default CreateBundle;