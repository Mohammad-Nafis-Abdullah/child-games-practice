/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex } from "@chakra-ui/react";
import useImageData, { data_schema } from "../../hooks/useImageData";
import { useEffect, useMemo, useRef, useState } from "react";
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

const select_1_id: string[] = [];
const select_2_id: string[] = [];

const ImageMatching = () => {
    const { data } = useImageData();
    const [select_1, setSelect_1] = useState<data_schema | null>(null);
    const [select_2, setSelect_2] = useState<data_schema | null>(null);
    const timeout_ref = useRef<number | null>(null);

    useEffect(() => {
        if (timeout_ref.current) {
            clearTimeout(timeout_ref.current);
        }
        
        // check both selection state not null
        if (select_1 && select_2) {
            // check the first selection is not equal to the category of second selection
            if (select_1?.category_id !== select_2?.category_id) {
                timeout_ref.current = setTimeout(() => {
                    setSelect_1(null);
                    setSelect_2(null);
                }, 500);
            }
            // check the first selection is equal to the category of second selection 
            else if (select_1.category_id === select_2.category_id) {
                select_1_id.push(select_1._id);
                select_2_id.push(select_2._id);
                setSelect_1(null);
                setSelect_2(null);
            }
        }
    }, [select_1, select_2, select_1_id, select_2_id]);

    const generate_random_indexes = useMemo(() => {
        return generate_random_numbers(12);
    }, []);

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
                generate_random_indexes.map((random_index) => {
                    return (
                        <SingleImgCard
                            key={random_index}
                            data={data}
                            random_index={random_index}
                            firstSelect={select_1}
                            secondSelect={select_2}
                            firstSelectedArr={select_1_id}
                            secondSelectedArr={select_2_id}
                            onFirstSelect={setSelect_1}
                            onSecondSelect={setSelect_2}
                            canFlip={!select_1 || !select_2}
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
    firstSelect,
    secondSelect,
    firstSelectedArr,
    secondSelectedArr,
    onFirstSelect,
    onSecondSelect,
    canFlip,
}: {
    data: data_schema[];
    random_index: number;
    firstSelect: data_schema | null;
    secondSelect: data_schema | null;
    firstSelectedArr: string[];
    secondSelectedArr: string[];
    onFirstSelect: React.Dispatch<React.SetStateAction<data_schema | null>>;
    onSecondSelect: React.Dispatch<React.SetStateAction<data_schema | null>>;
    canFlip: boolean;
}) => {
    const target = data?.[random_index];
    return (
        <ReactCardFlip
            isFlipped={(() => {
                if (firstSelectedArr.find((select) => select === target._id)) {
                    return false;
                } else if (
                    secondSelectedArr.find((select) => select === target._id)
                ) {
                    return false;
                } else if (firstSelect?._id === target._id) {
                    return false;
                } else if (secondSelect?._id === target._id) {
                    return false;
                } else {
                    return true;
                }
            })()}
            flipDirection="horizontal"
        >
            <Box
                as="img"
                src={target.img}
                alt={target.name}
                boxSize={"150px"}
                p={1.5}
                borderRadius={10}
                bg={"theme.darkGreen"}
                cursor={"pointer"}
                onClick={() => {
                    if (firstSelect?._id === target._id) {
                        onFirstSelect(null);
                    } else if (secondSelect?._id === target._id) {
                        onSecondSelect(null);
                    }
                }}
            />
            <Box
                boxSize={"150px"}
                p={1.5}
                borderRadius={10}
                bg={"theme.darkGreen"}
                cursor={"pointer"}
                onClick={() => {
                    if (canFlip) {
                        if (!firstSelect) {
                            onFirstSelect(target);
                        } else if (!secondSelect) {
                            onSecondSelect(target);
                        }
                    }
                }}
            >
                {target._id}
                <br />
                {target.category_id}
            </Box>
        </ReactCardFlip>
    );
};
