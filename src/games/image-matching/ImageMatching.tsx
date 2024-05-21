/* eslint-disable react-hooks/exhaustive-deps */
import {
    Box,
    Flex,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import useImageData, { data_schema } from "../../hooks/useImageData";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FaRegCheckCircle } from "react-icons/fa";

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
    const [suffled, setSuffled] = useState(false);

    const [select_1_id, setSelect_1_id] = useState<string[]>([]);
    const [select_2_id, setSelect_2_id] = useState<string[]>([]);

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
                setSelect_1_id((prev) => [...prev, select_1._id]);
                setSelect_2_id((prev) => [...prev, select_2._id]);
                setSelect_1(null);
                setSelect_2(null);
            }
        }
    }, [select_1, select_2, select_1_id, select_2_id]);

    const generate_random_indexes = useMemo(() => {
        return generate_random_numbers(12);
    }, [suffled]);

    return (
        <>
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
            <GratingsModal
                select_1_id={select_1_id}
                select_2_id={select_2_id}
                setSelect_1_id={setSelect_1_id}
                setSelect_2_id={setSelect_2_id}
                setSuffled={setSuffled}
            />
        </>
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
                boxSize={"150px"}
                p={1.5}
                borderRadius={10}
                bg={"blueviolet"}
                cursor={"pointer"}
                onClick={() => {
                    if (firstSelect?._id === target._id) {
                        onFirstSelect(null);
                    } else if (secondSelect?._id === target._id) {
                        onSecondSelect(null);
                    }
                }}
                position={"relative"}
            >
                <Box
                    as="img"
                    src={target.img}
                    alt={target.name}
                    boxSize={"100%"}
                    borderRadius={10}
                />
                {firstSelectedArr.find((select) => select === target._id) ||
                secondSelectedArr.find((select) => select === target._id) ? (
                    <Box
                        position={"absolute"}
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                    >
                        <Icon
                            as={FaRegCheckCircle}
                            boxSize={"100%"}
                            p={5}
                            color={"orange"}
                        />
                    </Box>
                ) : (
                    <></>
                )}
            </Box>
            <Box
                boxSize={"150px"}
                p={1.5}
                borderRadius={10}
                bg={"blueviolet"}
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
            />
        </ReactCardFlip>
    );
};

const GratingsModal = ({
    select_1_id,
    select_2_id,
    setSelect_1_id,
    setSelect_2_id,
    setSuffled,
}: {
    select_1_id: string[];
    select_2_id: string[];
    setSelect_1_id: React.Dispatch<React.SetStateAction<string[]>>;
    setSelect_2_id: React.Dispatch<React.SetStateAction<string[]>>;
    setSuffled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (select_1_id.length + select_2_id.length === 12) {
            onOpen();
        } else {
            onClose();
        }
    }, [select_1_id, select_2_id]);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton
                        onClick={() => {
                            setSelect_1_id([]);
                            setSelect_2_id([]);
                            setSuffled((prev) => !prev);
                        }}
                    />
                    <ModalBody>
                        Congratulations!, You have matched all the image
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
