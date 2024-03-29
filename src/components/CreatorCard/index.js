"use client";
import { useContext } from "react";
import React from 'react';
import Image from 'next/image';
import images from '@/assets'
import { NFTContext } from "../../../context/NFTContext";
const CreatorCard = ({rank, creatorImage, creatorName, creatorEths}) => {
    const {nftCurrency} = useContext(NFTContext);

    return (
        <div
            className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border border-nft-gray-1 dark:border-nft-black-1 rounded-3xl flex flex-col p-4 m-4 sm:min-w-155 sm:h-auto sm:p-2 sm:m-2">
            <div className="w-8 h-8 minlg:w-10 minlg:h-10 bg-emerald-500 flexCenter rounded-full">
                <p className="font-poppins text-white font-semibold text-base minlg:text-lg">{rank}</p>
            </div>
            <div className="my-2 flex justify-center">
                <div className="relative w-20 h-20 minlg:w-28 minlg:h-28">
                    <Image src={creatorImage}
                           alt="creator"
                           fill={true}
                           sizes='(max-width: 768px) 100vw, 33vw'
                           style={{objectFit: "cover"}}
                           className="rounded-full"/>

                    <div className="absolute w-5 h-5 minlg:w-7 minlg:h-7 bottom-1 -right-0">
                        <Image src={images.tick}
                               alt='verified'
                               fill={true}
                               sizes='(max-width: 768px) 100vw, 33vw'
                               style={{objectFit: "contain"}}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-3 minlg:mt-7 text-center flexCenter flex-col">
                <p className="font-poppins font-semibold dark:text-white text-nft-black-1 text-base">
                    {creatorName}
                </p>
                <p className="mt-1 font-poppins font-semibold dark:text-white text-nft-black-1 text-base">
                    <span>{creatorEths.toFixed(2)}</span> <span className="font-normal">{nftCurrency}</span>
                </p>
            </div>
        </div>
    );
};
export default CreatorCard;
