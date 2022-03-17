import pic1 from "../resources/batman-dp.jpeg";
import pic2 from "../resources/batman2.jpeg";
import pic3 from "../resources/default-dp.png";

const getPic = (imageName)=>{
    if(imageName===undefined || imageName.includes("batman-dp")) return pic1;
    else if(imageName.includes("batman2")) return pic2;
    else if(imageName.includes("default"))return pic3;
    return null;
}

export default getPic;