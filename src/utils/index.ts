export const isEmptyObject = (obj: any): boolean => {
	return JSON.stringify(obj) === '{}';
};

export const isEmptyArray = (arr: any[]): boolean => {
	return JSON.stringify(arr) === '[]';
};
