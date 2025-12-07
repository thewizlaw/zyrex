import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
    name: string;
    description?: string;
    userId: mongoose.Types.ObjectId;
    templateCategory: string;
    templateSlug: string;
    pages: mongoose.Types.ObjectId[];
    settings: {
        primaryColor?: string;
        secondaryColor?: string;
        fontFamily?: string;
        darkMode?: boolean;
    };
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const projectSchema = new Schema<IProject>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
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
    pages: [{
        type: Schema.Types.ObjectId,
        ref: 'Page'
    }],
    settings: {
        primaryColor: String,
        secondaryColor: String,
        fontFamily: String,
        darkMode: Boolean
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

projectSchema.index({ userId: 1, createdAt: -1 });

export const Project = mongoose.model<IProject>('Project', projectSchema);