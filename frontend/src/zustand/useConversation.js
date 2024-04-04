import {create} from 'zustand';

const useConversation = create((set,get)=>({
    selectedConversation:null,
    setSelectedConversation: (selectedConversation) =>set({selectedConversation}),
    messages:[],
    setMessages:(messages)=>ServiceWorker({messages}),
}));


export default useConversation;


