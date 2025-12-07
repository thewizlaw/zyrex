import mongoose, { Document, Schema } from 'mongoose';

export interface IPage extends Document {
    title: string;
    slug: string;
    projectId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    templateCategory: string;
    templateSlug: string;
    pageType: string;
    data: any;
    html?: string;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const pageSchema = new Schema<IPage>({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    templateCategory: {
        type: String,
        required: true
    },
    templateSlug: {
        type: String,
        required: true
    },
    pageType: {
        type: String,
        required: true,
        enum: [
            'homepage',
            'category',
            'product',
            'cart',
            'checkout',
            'account',
            'about',
            'contact',
            'blog',
            'post',
            'custom'
        ]
    },
    data: {
        type: Schema.Types.Mixed,
        required: true
    },
    html: {
        type: String
    },
    isPublished: {
        type: Boolean,
        default: false
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

pageSchema.index({ projectId: 1, slug: 1 }, { unique: true });
pageSchema.index({ userId: 1, createdAt: -1 });

export const Page = mongoose.model<IPage>('Page', pageSchema);