import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const industryExcellence = () => {
    return (
        <div>
            <Head>
                <title>Categories- IEI-NMLC FCRIT</title>
                <meta name="title" content="IEI-BLC FCRIT" />

            </Head>
            <Header /><NavBa />
         
            <Text fontSize="xl" color="black" marginStart={"350"}>
                <Text fontSize="3xl" color="black" fontWeight="bold">
                    Industry Excellence
                </Text><br />
                {/* <Text color="black" fontSize="xl" fontWeight="normal">
                    Contribution towards Education <br />
                    Contribution towards Technology development<br />
                    Contribution towards society<br />
                    (Please provide data for last three years)<br />
                </Text> */}

            
                {/* <Text fontSize="3xl" fontWeight="bold">
                    Document to be uploaded as a single .pdf
                </Text> */}
                <Text color="black" fontSize="xl" fontWeight={"normal"}>
                    {/* -Any tie-up with any academic Institute in the form of academic guidance, project guidance, industry visit, or sponsorship<br />
                    -Laboratory development at any academic Institute<br />
                    Kindly provide detailed relevant information with adequate proofs which may be web-link or other references. Photos of the information printed in newspaper or magazine can be uploaded to support the text filled in the Nomination Form.<br /> */}
                    <br />
                    <Text fontSize="xl">
                    Entry level criteria: <br /><br />
                    </Text>
                    <b>•  Any tie-up with any academic Institute in the form of academic guidance, project guidance, industry visit, or sponsorship</b>
                    <br />
                    <b>•  Laboratory development at any academic Institute
                    </b>
                    <br />
                    <br /><br /><br />
                </Text>
            </Text>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />

        </div>
    );
};

export default industryExcellence;