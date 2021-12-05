type PaginationButtons = 'next' | 'previous';
type Maybe<T> = T | undefined;
interface CharacterInfo {
	count: number;
	pages: number;
}

interface CharacterCard {
	id: string;
	name: string;
	status: string;
	image: string;
}

interface Character extends CharacterCard {
	species: string;
	type: string;
	gender: string;
	location: { name: string };
}

interface CharactersData {
	info: CharacterInfo;
	results: Character[];
}
interface CharactersAPIResponse {
	characters: CharactersData;
}

interface CharacterAPIResponse {
	character: Character;
}

interface ButtonProp {
	disabled: boolean;
}
interface PageURLParam {
	pageNumber: string;
}
interface StatusProp {
	status: 'alive' | 'dead' | 'unknown';
}
interface ProfileParam {
	characterId: Maybe<string>;
}
interface RecentlyVisitedState {
	characters: CharacterCard[];
}
