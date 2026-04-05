export declare class CabCity {
    id: number;
    slug: string;
    name: string;
    hero: {
        title: string;
        description: string;
        image: string;
    };
    bannerTitle: string;
    infoSection: {
        title: string;
        description: string[];
        whyRentTitle: string;
        benefits: string[];
        image: string;
    };
    countries: {
        name: string;
        image: string;
        buttonText: string;
    }[];
    blogTips: {
        title: string;
        description: string;
        image: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
}
