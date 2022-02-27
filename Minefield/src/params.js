import { Dimensions } from "react-native";
const params = {
    blockSize: 30,//Tamanho do bloco que representa a mina
    boderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,//proporção que ira representar o cabesalho que nesse caso seria de 15%
    difficultLevel: 0.1,//Nivel de dificuldade e o 0.1 significa que 10% da tela sera minas
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount(){
        const totalHight = Dimensions.get('window').height
        const boardHeight = totalHight * (1 -params.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params