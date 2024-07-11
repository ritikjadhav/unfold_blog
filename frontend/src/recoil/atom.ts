import { atom } from 'recoil';

export const user = atom({
    key: 'authorName',
    default: 'Anonymous'
})