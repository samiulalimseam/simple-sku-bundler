import React from "react";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const data = [
  {
    orderId: "bdnxz1",
    totalPrice: 45,
    randomField: 12,
  },
  {
    orderId: "bdnxz2",
    totalPrice: 32,
    randomField: 21,
  },
  {
    orderId: "bdnxz3",
    totalPrice: 78,
    randomField: 11,
  },
  {
    orderId: "bdnxz4",
    totalPrice: 19,
    randomField: 22,
  },
  {
    orderId: "bdnxz5",
    totalPrice: 56,
    randomField: 231,
  },
  {
    orderId: "bdnxz6",
    totalPrice: 87,
    randomField: 121,
  },
  {
    orderId: "bdnxz7",
    totalPrice: 23,
    randomField: 111,
  },
  {
    orderId: "bdnxz8",
    totalPrice: 42,
    randomField: 112,
  },
  {
    orderId: "bdnxz9",
    totalPrice: 65,
    randomField: 122,
  },
  {
    orderId: "bdnxz10",
    totalPrice: 51,
    randomField: 112,
  },
];

const Bundles = () => {
  return (
    <Box border={1}>
      <TableContainer>
        <Table variant="striped" colorScheme="blackAlpha" size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th isNumeric>Orders</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((d) => (
              <Tr key={d.orderId}>
                <Td>{d.orderId}</Td>
                <Td>${d.totalPrice}</Td>
                <Td isNumeric>{d.randomField}</Td>
              </Tr>
            ))}
            {/* <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td isNumeric>30.48</Td>
                            </Tr> */}
          </Tbody>
          {/* <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Tfoot> */}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Bundles;
