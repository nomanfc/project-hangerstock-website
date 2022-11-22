import React, { useEffect, useState, useCallback } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./table.css";

import { get_auction_details_by_aid } from "../../../HTTP_REQUESTS/api_";

const TableManifest = ({ dataTable }) => {
  const [details, setDetails] = useState();

  //get auctions details
  const fetchData = useCallback(async () => {
    const data = await get_auction_details_by_aid(dataTable);
    setDetails(data.data.data.manifest_details);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  return (
    <Table>
      <Thead>
        <Tr style={{ fontSize: "13px" }}>
          <Th>Category</Th>
          <Th>Description</Th>
          <Th>Condition</Th>
          <Th>Qty</Th>
          <Th>Retail Per Unit</Th>
          <Th>Total Retail</Th>
          <Th>Unit Per Cost</Th>
          <Th>Manufacturer</Th>
          <Th>Model</Th>
          <Th>Mobile Grading</Th>
        </Tr>
      </Thead>
      <Tbody>
        {details?.map((data, index) => (
          <Tr key={index} style={{ fontSize: "12px" }}>
            <Td>{data?.category}</Td>
            <Td>{data?.description}</Td>
            <Td>{data?.product_condition || "---"}</Td>
            <Td>{data?.quantity}</Td>
            <Td>{data?.retail_per_unit}</Td>
            <Td>{data?.total_retail}</Td>
            <Td>{data?.unit_per_cost}</Td>
            <Td>{data?.manufacturer}</Td>
            <Td>{data?.model}</Td>
            <Td>{data?.mobile_grading || "---"}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableManifest;
