import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import ImageMatching from "./games/image-matching/ImageMatching";

type selected_games = "image_matching";

function App() {
    const [games, setGames] = useState<undefined | selected_games>();
    return (
        <Flex minHeight={"100vh"} direction={"column"}>
            <Flex
                bg={"skyblue"}
                height={"100px"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Button
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    onClick={() => setGames("image_matching")}
                >
                    image matching
                </Button>
            </Flex>
            <Flex
                grow={1}
                justifyContent={"center"}
                alignItems={"center"}
                p={5}
            >
                {games === "image_matching" ? <ImageMatching /> : <></>}
            </Flex>
        </Flex>
    );
}

export default App;
