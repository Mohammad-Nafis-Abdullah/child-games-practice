import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ImageMatching from "./games/image-matching/ImageMatching";

type selected_games = "image_matching" | "test";

function App() {
    const [games, setGames] = useState<undefined | selected_games>();
    const start_sound_ref = useRef<HTMLAudioElement | null>();

    useEffect(() => {
        if (games) {
            start_sound_ref.current?.pause();
            start_sound_ref.current = null;
            start_sound_ref.current = new Audio("/audio/starting.wav");
            start_sound_ref.current?.play();
        }
    }, [games]);

    return (
        <Flex minHeight={"100vh"} direction={"column"}>
            <Flex
                bg={"skyblue"}
                height={"100px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={5}
            >
                <Button
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    onClick={() => setGames("image_matching")}
                >
                    image matching
                </Button>
                {/* <Button
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    onClick={() => setGames("test")}
                >
                    test
                </Button> */}
            </Flex>
            <Flex
                grow={1}
                justifyContent={"center"}
                alignItems={"center"}
                p={5}
            >
                {games === "image_matching" ? <ImageMatching /> : <></>}
                {/* {games === "test" ? <></> : <></>} */}
            </Flex>
        </Flex>
    );
}

export default App;
