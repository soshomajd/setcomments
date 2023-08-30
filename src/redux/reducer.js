import { loading,success,failed } from "../constants";
export const changenumber=(state=0,{type,payload})=>{

switch (type) {
    case "changenumber":
       return payload
        
       

    default:
        return state;
}
    
}

export const posts=(state={data:[],loading:false,error:""},{type,payload})=>{
    switch (type) {
        case loading:
            return payload
            case success:
                return payload
                case failed:
                    return payload
                    case "changetitle":
                    return payload


        default:
            return state
            
    }
}
