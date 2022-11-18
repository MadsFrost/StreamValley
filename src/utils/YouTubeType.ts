export interface YouTubeResult {
    kind: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items?: (ItemsEntity)[] | null;
}
export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}
export interface ItemsEntity {
    kind: string;
    id: Id;
    snippet: Snippet;
}
export interface Id {
    kind: string;
    videoId: string;
}
export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}
export interface Thumbnails {
    default: DefaultOrMediumOrHigh;
    medium: DefaultOrMediumOrHigh;
    high: DefaultOrMediumOrHigh;
}
export interface DefaultOrMediumOrHigh {
    url: string;
    width: number;
    height: number;
}  