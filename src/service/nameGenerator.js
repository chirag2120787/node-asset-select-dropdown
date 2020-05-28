import { uniqueNamesGenerator, adjectives, colors, animals, starWars } from 'unique-names-generator';

const customConfig = {
    dictionaries: [adjectives, colors, animals, starWars],
    separator: ' ',
    length: 2,
};

export default function generateRandomName() {
    return uniqueNamesGenerator(customConfig);
}