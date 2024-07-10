import { create } from "zustand";

type States ={
    name: string;
    address:{
        street: string;
        number: string;
        complement?: string | undefined;
        district: string;
        city: string;
    }
}

type Action={
    setName:(name: States["name"])=>void;
    setAddress:(address: States["address"])=>void;
}

const initialStates: States = {
    name: "",
    address:{
        street: '',
        number: '',
        complement: '',
        district: '',
        city: ''
    }

}


export const useCheckoutStore = create<States & Action>()(set=>({
    ...initialStates,
    setName: (name) => set(state=> ({...state, name})),
    setAddress: (address) => set(state=> ({...state, address}))

}))