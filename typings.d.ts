interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInformation: string;
    profilePic: Image;
    phoneNumber: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
}

export interface Technology extends SanityBody {
    _type: 'skill';
    title: string;
    progress: number;
    image: Image;
}

export interface Skill extends SanityBody {
    _type: 'skill';
    title: string;
    progress: number;
    image: Image;
}

export interface Experience extends SanityBody {
    _type: 'experience';
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    summary: string;
    image: Image;
    linkToBuild: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}