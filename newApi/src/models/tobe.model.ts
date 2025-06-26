type TobeModelType = Array<{
    joga: string;
    podeSer: string;
}>

export default class TobeModel{
    getTobe = () => {
        const list: TobeModelType = [
            {joga: "Dota" , podeSer: "dev js"},
            {joga: "WoW" , podeSer: "dev ts"},
            {joga: "Tibia" , podeSer: "dev java"},
            {joga: "CS" , podeSer: "dev python"}
        ]
        return list
    }
}