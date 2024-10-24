export interface Fantasy {
    title: string;
    description: string;
    image: string;
}

export interface SelectedFantasy extends Fantasy {
    website: string;
}

export interface CardFantasy extends Fantasy {
    avatar: string;
    views: string;
}
