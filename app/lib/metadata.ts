import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
    title: "ONE MILLION LANDLORD – Real Estate Investment & Property Development",
    description:
        "Discover profitable real estate investment opportunities with ONE MILLION LANDLORD. Transform underutilized properties into high-value assets and connect with top investors.",
    openGraph: {
        title: "ONE MILLION LANDLORD – Transforming Real Estate Investments",
        description:
            "ONE MILLION LANDLORD connects investors with high-value real estate opportunities, transforming underutilized properties into thriving communities.",
        type: "website",
        url: "https://onemillionlandlord.ng/",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "ONE MILLION LANDLORD - Real Estate Investment",
            },
        ],
    },
};

export const metadataByPage: Record<string, Metadata> = {
    home: {
        title: "Home | ONE MILLION LANDLORD – Your Real Estate Partner",
        description:
            "Explore top-tier real estate investment opportunities with ONE MILLION LANDLORD. Build wealth through property development.",
    },
    contact: {
        title: "Contact Us | ONE MILLION LANDLORD",
        description:
            "Get in touch with ONE MILLION LANDLORD for real estate investment and property development inquiries.",
    },
    aboutUs: {
        title: "About Us | ONE MILLION LANDLORD",
        description:
            "Learn more about ONE MILLION LANDLORD and our mission to transform real estate investments into profitable ventures.",
    },
};
