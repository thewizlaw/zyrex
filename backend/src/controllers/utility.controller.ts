import { Request, Response } from "express";
import { COMPONENT_REGISTRY, PAGE_TYPES } from "../config/constants";
import { PageData } from "../types";

export const healthCheck = (req: Request, res: Response) => {
    res.json({ 
        status: "OK", 
        timestamp: new Date().toISOString(),
        env: {
            hasApiKey: !!process.env.OPENROUTER_KEY
        },
        version: "3.0.0",
        features: [
            "AI-powered generation",
            "Visual JSON editing",
            "JSON validation",
            "Homepage generation",
            "Category pages with filters",
            "Product detail pages",
            "Cart & checkout pages",
            "User account pages",
            "27 component types"
        ]
    });
};

export const getComponents = (req: Request, res: Response) => {
    res.json({
        available_components: COMPONENT_REGISTRY,
        page_types: PAGE_TYPES
    });
};

export const getExample = (req: Request, res: Response) => {
    const exampleJSON: PageData = {
        page_title: "Example Store - Homepage",
        page_type: "homepage",
        header: {
            logo: "ExampleStore",
            menu: [
                { text: "Shop", href: "/shop" },
                { text: "About", href: "/about" },
                { text: "Contact", href: "/contact" }
            ]
        },
        sections: [
            {
                type: "hero",
                title: "Welcome to Our Store",
                subtitle: "Discover amazing products",
                text: "Shop the latest trends with unbeatable prices"
            },
            {
                type: "featured-products",
                title: "Featured Products",
                items: [
                    {
                        name: "Example Product",
                        price: "99.99",
                        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
                        rating: 4.8,
                        review_count: 234,
                        category: "Electronics",
                        in_stock: true
                    }
                ]
            }
        ],
        footer: {
            sections: [
                {
                    title: "Company",
                    links: [
                        { text: "About Us", href: "/about" },
                        { text: "Contact", href: "/contact" }
                    ]
                }
            ],
            copyright: "© 2024 Example Store. All rights reserved."
        },
        styles: {
            primary_color: "#3b82f6",
            secondary_color: "#8b5cf6",
            font_family: "Inter, sans-serif",
            dark_mode: false
        }
    };

    res.json(exampleJSON);
};