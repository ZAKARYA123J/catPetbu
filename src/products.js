import React, { useState, useEffect } from "react";
import { Box, Flex, Input, Button,Image,Avatar } from "@chakra-ui/react";
import Search from "./search";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Card2 from "./card2";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
export default function Products(props) {
  const jsonData = props.data || [];
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [targetObject, setTargetObject] = useState(null);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    // Find the object with the specified ID
    if (jsonData && searched !== "") {
      const foundObject = jsonData.find(
        (item) =>
          item.id.toString() === searched || item.id.toString() === "N" + searched
      );
      setTargetObject(foundObject);
    } else {
      // If no ID is searched, reset the targetObject
      setTargetObject(null);
    }
  }, [jsonData, searched]);

  // Calculate the range of items to display based on the current page
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
      <Box>
      <Flex
  direction="column"
  p={2}
  py={6}
  m="auto"
  h="100px"  // Use 100vh for full screen height
  align="center"
  justify="center"
>
<Flex alignItems="center">
  <Image boxSize="20px" src="https://th.bing.com/th/id/OIP.EKy6ikknzx8n7NB6iJJ7wgHaHa?rs=1&pid=ImgDetMain" mr={2} />
  <Input
    Width="50%"
    variant="flushed"
    borderColor="black"
    color="black"
    type="text"
    leftIcon={<FaSearch/>}
    onChange={(e) => setSearched(e.target.value)}
  />
</Flex>



        </Flex>
      </Box>

      <Flex flexWrap="wrap" justify="center">
        {displayedItems.length > 0 ? (
          displayedItems.map((item) => (
            <Box key={item.id} mx="auto" >
            <Card2 data={item}  />

            </Box>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <div style={{padding:"10px"}}>
          <Button
            onClick={goToPrevPage}
          mr={'20px'}
            >
           <GrLinkPrevious />PrevPage...  
          </Button>
          <Button
          
            onClick={goToNextPage}
            
          >
            <GrLinkNext /> NextPage...
          </Button>
          </div>
      </Flex>
    </>
  );
}
