import React, { useState, useEffect } from "react";
import { Box, Grid, Input, Button, Image,Flex } from "@chakra-ui/react";
import Card2 from "./card2";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

export default function Products(props) {
  const jsonData = props.data || [];
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [targetObject, setTargetObject] = useState(null);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    if (jsonData && searched !== "") {
      const foundObject = jsonData.find(
        (item) =>
          item.id.toString() === searched || item.id.toString() === "N" + searched
      );
      setTargetObject(foundObject);
    } else {
      setTargetObject(null);
    }
  }, [jsonData, searched]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = targetObject
    ? [targetObject]
    : jsonData
    ? jsonData.slice(startIndex, endIndex)
    : [];

  const totalPages = Math.ceil(jsonData.length / itemsPerPage);

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <Box p={2} py={6} m="auto" align="center" justify="center">
        <Flex alignItems="center">
          <Image boxSize="20px" src="https://th.bing.com/th/id/OIP.EKy6ikknzx8n7NB6iJJ7wgHaHa?rs=1&pid=ImgDetMain" mr={2} />
          <Input
            width="50%"
            variant="flushed"
            borderColor="black"
            color="black"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearched(e.target.value)}
          />
        </Flex>
      </Box>

      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} p={5}>
        {displayedItems.length > 0 ? (
          displayedItems.map((item) => (
            <Box key={item.id}>
              <Card2 data={item} />
            </Box>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </Grid>
     
        <Button onClick={goToPrevPage} mr="20px">
          <GrLinkPrevious /> PrevPage
        </Button>
        <Button onClick={goToNextPage}>
          <GrLinkNext /> NextPage
        </Button>
     
    </>
  );
}
