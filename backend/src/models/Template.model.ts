import mongoose, { Document, Schema } from 'mongoose';

export interface ITemplate extends Document {
    name: string;
    slug: string;
    category: string;
    description: string;
    thumbnail: string;
    author: string;
    isPremium: boolean;
    price: number;
    tags: string[];
    previewUrl?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const templateSchema = new Schema<ITemplate>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    category: {
        type: String,
        required: true,
        enum: [
            'ecommerce',
            'business',
            'portfolio',
            'landing',
            'blog',
            'personal',
            'dashboard',
            'saas',
            'realestate',
            'health',
            'education'
        ]
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'COSMIC AI'
    },
    isPremium: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        default: 0
    },
    tags: [{
        type: String
    }],
    previewUrl: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

templateSchema.index({ category: 1, slug: 1 });

export const Template = mongoose.model<ITemplate>('Template', templateSchema);
