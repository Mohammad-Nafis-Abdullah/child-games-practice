import { Box, Flex } from "@chakra-ui/react";
import useImageData, { data_schema } from "../../hooks/useImageData";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const generate_random_numbers = (length = 0) => {
    const cache: { [key: string]: boolean } = {};
    const randoms: number[] = [];
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const index = Math.floor(Math.random() * length);
        const index_string = index.toString();
        if (!cache[index_string]) {
            randoms.push(index);
            cache[index_string] = true;
        }
        if (randoms.length === length) {
            break;
        }
    }
    return randoms;
};

const ImageMatching = () => {
    const { data } = useImageData();
    return (
        <Flex
            grow={0}
            basis={"auto"}
            maxWidth={"700px"}
            shrink={1}
            wrap={"wrap"}
            justifyContent={"center"}
            gap={2}
        >
            {data ? (
                generate_random_numbers(12).map((random_index) => {
                    return (
                        <SingleImgCard
                            key={random_index}
                            data={data}
                            random_index={random_index}
                        />
                    );
                })
            ) : (
                <></>
            )}
        </Flex>
    );
};

export default ImageMatching;

const SingleImgCard = ({
    data,
    random_index,
}: {
    data: data_schema[];
    random_index: number;
}) => {
    const [isFlipped, setIsFlipped] = useState(true);
    const target = data?.[random_index];
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Box
                as="img"
                src={target.img}
                alt={target.name}
                boxSize={"150px"}
                p={1.5}
                borderRadius={10}
                bg={"theme.darkGreen"}
                cursor={"pointer"}
                onClick={() => setIsFlipped((prev) => !prev)}
            />
            <Box
                boxSize={"150px"}
                p={1.5}
                borderRadius={10}
                bg={"theme.darkGreen"}
                cursor={"pointer"}
                onClick={() => setIsFlipped((prev) => !prev)}
            />
        </ReactCardFlip>
    );
};
