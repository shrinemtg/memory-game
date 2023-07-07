"use client";
import Image from "next/image";
import styled from "styled-components";
import Trump from "@/components/trump";
import Test from "@/components/test";

import Test_shuffle from "@/components/test_shuffle";

// import Home_text from "@/components/hometext";
export default function Home() {
  return (
    <>
      {/* <TableContainer>
        <Test />
      </TableContainer> */}
      <Test_shuffle />
      {/* <Trump /> */}
    </>
  );
}

const TableContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
