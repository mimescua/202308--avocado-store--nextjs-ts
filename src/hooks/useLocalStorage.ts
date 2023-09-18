import { useEffect, useReducer } from 'react';

interface State<T> {
	item: T;
	loading: boolean;
	error: boolean;
}

interface Action<T> {
	type: ActionTypes;
	payload?: T;
}

interface Output<T> {
	item: T;
	saveItem: (newItem: T) => void;
	loading: boolean;
	error: boolean;
}

type Payload = (state: State<any>, payload: any) => State<any>;
type Reducer<T> = (state: State<T>, action: Action<T>) => State<T>;

function useLocalStorage<T>(itemName: string, initialValue: T): Output<T> {
	const [state, dispatch] = useReducer<Reducer<T>>(reducer, initialState(initialState));
	const { item, loading, error } = state;

	const onError = (error: any) => dispatch({ type: ActionTypes.error, payload: error });
	const onSuccess = (item: T) => dispatch({ type: ActionTypes.success, payload: item });
	const onSave = (item: T) => dispatch({ type: ActionTypes.save, payload: item });

	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);

				let parsedItem: T;
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}

				onSuccess(parsedItem);
			} catch (error: any) {
				onError(error);
			}
		}, 2000);
	}, []);

	const saveItem = (newItem: T) => {
		try {
			localStorage.setItem(itemName, JSON.stringify(newItem));
			onSave(newItem);
		} catch (error: any) {
			onError(error);
		}
	};

	return { item, saveItem, loading, error };
}

const initialState = (initialValue: any) => ({
	item: initialValue,
	loading: true,
	error: false,
});

enum ActionTypes {
	error = 'ERROR',
	success = 'SUCCESS',
	save = 'SAVE',
}

const reducerObject: Record<ActionTypes, Payload> = {
	[ActionTypes.error]: (state) => ({ ...state, error: true }),
	[ActionTypes.success]: (state, payload) => ({
		...state,
		error: false,
		loading: false,
		item: payload,
	}),
	[ActionTypes.save]: (state, payload) => ({ ...state, item: payload }),
};

const reducer: Reducer<any> = (state, action) => {
	return reducerObject[action.type]?.(state, action.payload) || state;
};

export default useLocalStorage;
